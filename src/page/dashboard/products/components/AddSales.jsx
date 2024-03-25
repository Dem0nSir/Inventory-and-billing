import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";
import Invoice from "../print/Invoice";
const AddSales = () => {
  const [show, setShow] = useState(false);


  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    itemsName: "",
    itemCost:"",
    itemSold: "",
    salesChannel: "",
    paymentMethod: "",
    salesTotal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
      const assetCollectionRef = collection(db, 'sales')
      await addDoc(assetCollectionRef, { ...formData, salesDate: formattedDate })
      console.log("Form Data Saved to Firestore:", formData);
      handleClose();
      setFormData({
        orderId: "",
        customerName: "",
        itemsName: "",
        phoneNumber: "",
        itemName:"",
        itemCost:"",
        itemSold: "",
        salesChannel: "",
        payment:"",
        paymentMethod: "",
        salesTotal: "",
      });
    } catch (error) {
      console.error("Error saving form data:", error);
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Order Id</Form.Label>
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
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Name"
                name="customerName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Items Name"
                name="itemsName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Cost"
                name="itemCost"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items Sold</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Sold"
                name="itemSold"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sales Channel</Form.Label>
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
              <Form.Label>Payment </Form.Label>
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
              <Form.Label>Payment method</Form.Label>
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
              <Form.Label>Sales Total</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sales Total"
                name="salesTotal"
                onChange={handleChange}
                autoFocus
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
