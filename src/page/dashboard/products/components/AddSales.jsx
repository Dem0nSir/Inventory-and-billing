import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../services/firebase";

import * as yup from "yup";
const AddSales = () => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    itemsName: "",
    itemCost: "",
    itemSold: "",
    salesChannel: "",
    paymentMethod: "",
    salesTotal: "",
  });
  const schema = yup.object().shape({
    orderId: yup.string().required("Order ID is required"),
    customerName: yup.string().required("Customer Name is required"),
    itemsName: yup.string().required("Items Name is required"),
    itemCost: yup.number().required("Item Cost is required"),
    itemSold: yup.number().required("Items Sold is required"),
    salesChannel: yup.string().required("Sales Channel is required"),
    paymentMethod: yup.string().required("Payment Method is required"),
    salesTotal: yup.number().required("Sales Total is required"),
  });

  useEffect(() => {
    const productsRef = collection(db, "products");

    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const productsList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsList);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      try {
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`;

        const assetCollectionRef = collection(db, "sales");
        await addDoc(assetCollectionRef, {
          ...formData,
          salesDate: formattedDate,
        });
        console.log("Form Data Saved to Firestore:", formData);
        handleClose();
        setFormData({
          orderId: "",
          customerName: "",
          itemsName: "",
          phoneNumber: "",
          itemName: "",
          itemCost: "",
          itemSold: "",
          salesChannel: "",
          payment: "",
          paymentMethod: "",
          salesTotal: "",
        });
      } catch (error) {
        console.error("Error saving form data:", error);
        setErrorMessage("Error saving form data");
      }
    } catch (error) {
      console.error("Error validating form data:", error);
      setErrorMessage("Enter all required fields");
    }
  };

  const handleClose = () => {
    setShow(false);
    // navigate('/dashboard/sales');
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Sales
      </Button>
      {/* <Invoice  /> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sales Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="alert alert-danger">{errorMessage}</p>
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Order Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Order Id"
                name="orderId"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Sales Date</Form.Label>
              <Form.Control type="date" name="salesDate"  onChange={handleChange}/>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Name"
                name="customerName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Items Name</Form.Label>
              <Form.Control
                as="select"
                name="itemsName"
                onChange={handleChange}
              >
                <option value="">Select a product</option>
                {products.map((product, index) => (
                  <option key={index} value={product.productName}>
                    {product.productName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Items cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Cost"
                name="itemCost"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Items Sold</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Sold"
                name="itemSold"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Sales Channel</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="salesChannel"
                onChange={handleChange}
              >
                <option selected>Select Sales Channel</option>
                <option value="Online">Online</option>
                <option value="Physical Store">Physical Store</option>
                <option value="Phone Order">Phone Order</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Payment </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="payment"
                onChange={handleChange}
              >
                <option selected>Payment</option>
                <option value="pending">Pending</option>
                <option value="Full Payment">Full Payment</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Payment method</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="paymentMethod"
                onChange={handleChange}
              >
                <option selected>Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Online Payment">Online Payment</option>
                <option value="Card payment">Card payment</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold">Sales Total</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sales Total"
                name="salesTotal"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Record
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSales;
