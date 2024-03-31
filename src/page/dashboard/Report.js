import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { db } from "../services/firebase";

const Report = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getProducts();

  }, [showEditModal,selectedPeriod]);
  useEffect(() => {
    let filtered;
    const currentDate = new Date();
    
    switch(selectedPeriod) {
      case 'Yearly':
        filtered = formData.filter(product => {
          const productDate = new Date(product.addedOn);
          return productDate.getFullYear() === currentDate.getFullYear();
        });
        break;
      case 'Monthly':
        filtered = formData.filter(product => {
          const productDate = new Date(product.addedOn);
          return productDate.getFullYear() === currentDate.getFullYear() && productDate.getMonth() === currentDate.getMonth();
        });
        break;
      case 'Weekly':
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(currentDate.getDate() - 7);
        filtered = formData.filter(product => {
          const productDate = new Date(product.addedOn);
          return productDate >= oneWeekAgo;
        });
        break;
      default:
        filtered = formData;
    }
  
    setFilteredData(filtered);
  }, [selectedPeriod, formData]);

  const getProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const querySnapshot = await getDocs(productsCollection);

      const productsData = [];
      querySnapshot.forEach((doc) => {
        // Retrieve data from each document and push it into the productsData array
        productsData.push({ id: doc.id, ...doc.data() });
      });

      setFormData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };
  console.log(formData);

  // const filterDataByPeriod = () => {
  //   const currentDate = new Date();
  //   const oneWeekAgo = new Date(
  //     currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  //   );

  //   // Filter data based on selected period
  //   switch (selectedPeriod) {
  //     case "Yearly":
  //       return formData.filter((item) => {
  //         const itemDate = new Date(item.addedOn);
  //         return itemDate.getFullYear() === currentDate.getFullYear();
  //       });

  //     case "Monthly":
  //       return formData.filter((item) => {
  //         const itemDate = new Date(item.addedOn);
  //         return (
  //           itemDate.getFullYear() === currentDate.getFullYear() &&
  //           itemDate.getMonth() === currentDate.getMonth()
  //         );
  //       });

  //     case "Weekly":
  //       return formData.filter((item) => {
  //         const itemDate = new Date(item.addedOn);
  //         return itemDate >= oneWeekAgo && itemDate <= currentDate;
  //       });

  //     default:
  //       return formData;
  //   }
  // };

  // const filteredData = filterDataByPeriod();
  // console.log("f", filteredData);

  return (
    <>
      <div className="bg-white h-screen">
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5 class="text-2xl text-gray-600 font-medium lg:block text-center">
                Inventory Management system
              </h5>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6 mb-4">
              <div className="card m-4 h-100">
                <div className="mx-4 mt-3 fw-bold d-flex justify-content-between">
                  <div className="fs-3">Overview</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Select Period
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Yearly</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Weekly</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Period
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="dropdown-item">
                        <a className="dropdown-item" href="#">
                        Yearly
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Monthly
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Weekly
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="row mx-4 mt-5 fw-bold">
                  {/* First part: Amount and Total Profit */}
                  <div className="col ">
                    <div>$1000</div>
                    <div>Total Profit</div>
                  </div>

                  {/* Second part: Amount and Revenue */}
                  <div className="col">
                    <div>$1500</div>
                    <div>Revenue</div>
                  </div>

                  {/* Third part: Amount and Sales */}
                  <div className="col">
                    <div> $2000</div>
                    <div>Sales</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="card m-4 h-100">
                <div className="mx-4 mt-3 fw-bold d-flex justify-content-between">
                  <div className="fs-3">Recently Added Product</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Select Period
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setSelectedPeriod("Yearly")}
                      >
                        Yearly
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedPeriod("Monthly")}
                      >
                        Monthly
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedPeriod("Weekly")}
                      >
                        Weekly
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div class="table-responsive m-4">
                  <table class="table">
                    <thead>
                      <tr class="fw-bold fs-6 text-gray-800">
                        <th>Product</th>
                        <th>Buying Price</th>
                        <th>Quantity</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((product) => (
                        <tr key={product.id}>
                          <td>{product.productName}</td>
                          <td>{product.buyingPrice}</td>
                          <td>{product.quantity}</td>
                          <td>{product.addedOn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4"> </div>

          <div className="card mx-4 ">
            <div className="mx-4 mt-3 fw-bold d-flex justify-content-between">
              <div className="fs-3">Best selling products</div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Period
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Yearly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="table-responsive m-4">
              <table class="table">
                <thead>
                  <tr class="fw-bold fs-6 text-gray-800">
                    <th>Supplier Name</th>
                    <th>Product</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>On the way</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aayu Shakya</td>
                    <td>Cakes</td>
                    <td>1234567890</td>
                    <td>Aayu@gmail.com</td>
                    <td>Taking Return</td>
                    <td>13</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Aayu Shakya</td>
                    <td>Coffee</td>
                    <td>1234567890</td>
                    <td>Aayu@gmail.com</td>
                    <td>Taking Return</td>
                    <td>13</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Aayu Shakya</td>
                    <td>Shoes</td>
                    <td>1234567890</td>
                    <td>Aayu@gmail.com</td>
                    <td>Not Taking Return</td>
                    <td>13</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
