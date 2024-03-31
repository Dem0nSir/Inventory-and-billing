import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Invoice from "../print/Invoice";
import databaseServices from "./services/database.services";

const EditSales = ({ id }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    editHandler();
  }, []);
  console.log(id)

  const editHandler = async () => {
    try {
      const docSnap = await databaseServices.getPolicy(id);
      console.log(docSnap.data());
        setFormData(docSnap.data());
    } catch (error) {
      setMessage({ error: true, msg: error.message });
      //   setShowAlert(true)
    }
  };
console.log(formData)
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
    //   await updateDoc(db, "sales", sale.id, formData);
    await databaseServices.updateSale(id, formData);
      console.log("Form Data Updated in Firestore:", formData);
      handleClose();
    } catch (error) {
      console.error("Error updating form data:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    // navigate("/dashboard/sales");
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-sm btn-primary mx-2" onClick={handleShow}>
        Edit
      </Button>
      {/* <Invoice  /> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Sales Record</Modal.Title>
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
                value={formData.orderId}
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
                value={formData.customerName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
               value={formData.phoneNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Items Name"
                name="itemsName"
                onChange={handleChange}
                value={formData.itemsName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Cost"
                name="itemCost"
                onChange={handleChange}
                value={formData.itemCost}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Items Sold</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Sold"
                name="itemSold"
                onChange={handleChange}
                value={formData.itemSold}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sales Channel</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="salesChannel"
                onChange={handleChange}
                value={formData.salesChannel}
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
             value={formData.payment}
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
            value={formData.paymentMethod}
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
               value={formData.salesTotal}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Edit Record
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditSales;
