// import { collection, onSnapshot } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import { db } from '../../../services/firebase';

// const Invoice = () => {
//   // Destructure order details for readability


//   const [sales, setSales] = useState([]);
// console.log(sales)
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "sales"), (snapshot) => {
//       const suppliersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setSales(suppliersData);
//     });
//     // Unsubscribe from the snapshot listener when component unmounts
//     return () => unsubscribe();
//   }, []);



  
 
//   const handlePrint = () => {
//     window.print();
//   };

//   return (

//     <div className="invoice-container">
//       <div className="invoice-header">
//         <h1>Shakya Handicraft</h1>
//         <p>MangalBazar,Patan</p>
//       </div>
//       {sales.map((sale) => (
//         <>
//       <div className="invoice-details">
//         <p>Invoice No:</p>
//         <p>Invoice Date:</p>
//       </div>
//       <p>Bill To:</p>
//       <p>{sale.customerName}</p>
//       <p></p>
//       <h2>Order Summary</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Unit Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {sale.map((item) => (
//             <tr key={item.id}>
//               <td>{item.customerName}</td>
//               <td>{item.itemSold}</td>
//               <td>${item.itemCost}</td>
//               <td>${(item.price * item.quantity).toFixed(2)}</td>
//             </tr>
//           ))} */}
//         </tbody>
//         <tfoot>
//           <tr>
//             <th colSpan="3">Subtotal</th>
//             {/* <td>${subTotalamount.toFixed(2)}</td> */}
//           </tr>
//           <tr>
//             <th colSpan="3">Tax (if applicable)</th>
//             {/* <td>${taxamount.toFixed(2)}</td> */}
//           </tr>
//           <tr>
//             <th colSpan="3">Total</th>
//             {/* <td>${totalamount.toFixed(2)}</td> */}
//           </tr>
//         </tfoot>
//       </table>
//       <div className="print-btn">
//         <button onClick={handlePrint}>Print Invoice</button>
//       </div>
//       </>
//       ))}
//     </div>
//   );
// };

// export default Invoice;

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function Invoice() {
  return (
    <MDBContainer className="py-5 ">
      <MDBCard className="p-4 ml-10">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: #123-123</strong>
                </p>
              </MDBCol>
              <MDBCol xl="3" className="float-end">
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0"
                >
                  <MDBIcon fas icon="print" color="primary" className="me-1" />
                  Print
                </MDBBtn>
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0 ms-2"
                >
                  <MDBIcon
                    far
                    icon="file-pdf"
                    color="danger"
                    className="me-1"
                  />
                  Export
                </MDBBtn>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon
                fab
                icon="mdb"
                size="4x"
                className="ms-0 "
                style={{ color: "#5d9fc5" }}
              />
              <p className="pt-0">Shakya Handicraft</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#5d9fc5" }}>John Lorem</span>
                </li>
                <li className="text-muted">Street, City</li>
                <li className="text-muted">State, Country</li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 123-456-789
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">ID:</span>#123-456
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>Jun
                  23,2021
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                    Unpaid
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pro Package</td>
                  <td>4</td>
                  <td>$200</td>
                  <td>$800</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Web hosting</td>
                  <td>1</td>
                  <td>$10</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Consulting</td>
                  <td>1 year</td>
                  <td>$300</td>
                  <td>$300</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span class="text-black me-4">SubTotal</span>$1110
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span class="text-black me-4">Tax(15%)</span>$111
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>$1221</span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
            </MDBCol>
            <MDBCol xl="2">
              <MDBBtn
                className="text-capitalize"
                style={{ backgroundColor: "#60bdf3" }}
              >
                Pay Now
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}