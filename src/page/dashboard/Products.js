import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Modal } from "react-bootstrap";
import Addproduct from "./products/components/Addproduct";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { Button, Offcanvas } from "react-bootstrap";
import { Form } from "react-router-dom";

const Products = (props) => {
  const [products, setProducts] = useState([]); // State to hold product data
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [editProductId, setEditProductId] = useState();
  // Fetch product data from API or database on component mount
  // useEffect(() => {
  //   getProduct();
  // }, []);
  // console.log("p", products);
  // const getProduct = async () => {
  //   try {
  //     const productCollectionRef = collection(db, "products");
  //     const querySnapshot = await getDocs(productCollectionRef);
  //     const productsData = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setProducts(productsData);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });
    // Unsubscribe from the snapshot listener when component unmounts
    return () => unsubscribe();
  }, []);
  // Render product table
  const toggleDropdown = () => {
    // console.log('clicked')
    setDropdownVisible(!isDropdownVisible);
  };
  const handleDelete = (id) => {
    const Doc = doc(db, "products", id);
    return deleteDoc(Doc);
  };
  const handleEdit = (id) => {
    // setEditProduct(product);
    setEditProductId(id);
    setShowEditModal(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleClose = () => setShow(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const assetCollectionRef = collection(db, "products", editProductId);
      await updateDoc(assetCollectionRef, formData);

      console.log("Form Data Saved to Firestore:", formData);
      handleClose();
      // setFormData({
      //   productName: "",
      //   buyingPrice: "",
      //   quantity: "",
      //   sellingPrice: "",
      //   productStatus: "In-Stock",
      // });
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  return (
    <>
      <div className="bg-white h-screen">
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5 class="text-2xl text-gray-600 font-medium lg:block">
                Inventory Management System
              </h5>
            </div>
          </div>

          <div className={`card mx-4 mb-2 mb-xl-8 mt-2`}>
            <div className="card border-0 m-4 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45px me-5">
                    {/* <img src={toAbsoluteUrl(`/media/logos/${icon}`)} alt='' /> */}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="card-label fw-bold fs-3">
                      Overall Inventory
                    </span>
                    {/* <span className='text-muted fw-semibold fs-7'>{desc}</span> */}
                  </div>
                </div>
                <Addproduct />
                {/* <button
                  id="kt_drawer_example_basic_button"
                  class="btn btn-primary"
                >
                  Toggle basic drawer
                </button> */}
              </div>
            </div>
          </div>

          <div className="card m-4 h-100">
            <div className="mx-3 mt-3 fs-4 d-flex align-items-center">
              <span>Overall Inventory</span>
              <div className="ms-auto ">
                <input
                  type="text"
                  data-kt-user-table-filter="search"
                  className="form-control form-control-solid w-250px ps-14"
                  placeholder="Search Products"
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div class="table-responsive m-4">
              <table class="table">
                <thead>
                  <tr class="fw-bold fs-6 text-gray-800">
                    <th>Products</th>
                    <th>Buying Price</th>
                    <th>Quantity</th>
                    <th>Selling Price</th>
                    <th>Expiry Date</th>
                    <th>Availabe</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.productName}</td>
                      <td>{product.buyingPrice}</td>
                      <td>{product.quantity}</td>
                      <td>{product.sellingPrice}</td>
                      <td>-</td>
                      {/* <td>{product.productStatus}</td> */}
                      <td>
                        {product.productStatus === "In-Stock" && (
                          <span className="badge bg-success p-1 text-muted">
                            {product.productStatus}
                          </span>
                        )}
                        {product.productStatus === "Out-of-Stock" && (
                          <span className="badge bg-warning p-1 text-muted">
                            {product.productStatus}
                          </span>
                        )}
                        {product.productStatus === "Stopped" && (
                          <span className="badge bg-danger p-1 text-muted">
                            {product.productStatus}
                          </span>
                        )}
                      </td>
                      <td>
                        {/* <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(product.id)}
                        >
                          Edit
                        </button> */}
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Offcanvas
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Add Product</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Product</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Product Name"
                        name="productName"
                        onChange={handleChange}
                      />
                      {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Buying Price</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Buying Price"
                        name="buyingPrice"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Selling Price</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Selling Price"
                        name="sellingPrice"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProduct">
                      <Form.Label>Select Product</Form.Label>
                      <Form.Select
                        name="productStatus"
                        //  value={formData.productStatus}
                        onChange={handleChange}
                      >
                        <option value="In-Stock">In-Stock</option>
                        <option value="Out-of-Stock">Out-of-Stock</option>
                        <option value="Stopped">Stopped</option>
                        {/* Add more options as needed */}
                      </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
