// import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { auth } from "../page/services/firebase";
// function HeaderAndSidebar(props) {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         // Sign-out successful.
//         navigate("/login");
//         console.log("User signed out");
//       })
//       .catch((error) => {
//         // An error happened.
//         setError(error.message);
//       });
//   };

//   const dashboardMenu = [
//     {
//       id: 1,
//       name: "Dashboard",
//       link: "/dashboard",
//       icon: (
//         <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//           <path
//             d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
//             className="fill-current text-cyan-400 dark:fill-slate-600"
//           ></path>
//           <path
//             d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
//             className="fill-current text-cyan-200 group-hover:text-cyan-300"
//           ></path>
//           <path
//             d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
//             className="fill-current group-hover:text-sky-300"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       name: "Sales",
//       link: "/dashboard/sales",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             fill-rule="evenodd"
//             d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
//             clip-rule="evenodd"
//           />
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       name: "Products",
//       link: "/dashboard/products",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             fill-rule="evenodd"
//             d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
//             clip-rule="evenodd"
//           />
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       name: "Report",
//       link: "/dashboard/report",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             fill-rule="evenodd"
//             d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
//             clip-rule="evenodd"
//           />
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 5,
//       name: "Supplier",
//       link: "/dashboard/supplier",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
//           />
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 6,
//       name: "Orders",
//       link: "/dashboard/orders",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
//           />
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             fill-rule="evenodd"
//             d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 7,
//       name: "Manage Store",
//       link: "/dashboard/stores",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
//           />
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             fill-rule="evenodd"
//             d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: 8,
//       name: "Create Account",
//       link: "/dashboard/createAccount",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             className="fill-current text-gray-300 group-hover:text-cyan-300"
//             d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
//           />
//           <path
//             className="fill-current text-gray-600 group-hover:text-cyan-600"
//             fill-rule="evenodd"
//             d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
//         <div>
//           <div className="-mx-6 px-6 py-4">
//             <Link to="/dashboard" title="home" className="text-decoration-none">
//               {" "}
//               {/* Add the text-decoration-none class to the Link component */}
//               {/* <img src="" className="w-32" alt="tailus logo" /> */}
//               <h5 className="fw-bold text-decoration-none text-center">Shakya Handicraft</h5>{" "}
//               {/* Add the text-decoration-none class to the h5 tag */}
//             </Link>
//           </div>

//           <div className="mt-8 text-center">
//             <img
//               src="/images/blank.png"
//               alt=""
//               className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
//             />
//             <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
//               Aayushma Shakya
//             </h5>
//             <span className="hidden text-gray-400 lg:block">Admin</span>
//           </div>

//           <ul className="space-y-2 tracking-wide mt-8">
//             {dashboardMenu.map((m) => (
//               <Link to={m.link} className="nav-link text-decoration-none">
//                 {" "}
//                 {/* Add the text-decoration-none class */}
//                 <li
//                   key={m.id}
//                   className={
//                     window.location.pathname === m.link
//                       ? "bg-gradient-to-r from-sky-500 to-cyan-300 active:text-white rounded-xl group"
//                       : ""
//                   }
//                 >
//                   <div
//                     className="px-4 py-3 flex items-center space-x-4 text-black hover:rounded-xl group"
//                     onClick={() => {
//                       window.location.pathname = m.link;
//                     }}
//                   >
//                     {m.icon}
//                     <span className="-mr-1 font-medium">{m.name}</span>
//                   </div>
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>

//         <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
//           <button className="w-full px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//               />
//             </svg>
//             {/* <span className=""><Link to="/">Logout</Link></span> */}
//             <button onClick={handleSignOut} className="btn">
//               Logout
//             </button>
//           </button>
//         </div>
//       </aside>
//       <Outlet />
//     </div>
//   );
// }

// export default HeaderAndSidebar;

import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../page/services/firebase";
function HeaderAndSidebar(props) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      });
  };

  const dashboardMenu = [
    {
      id: 1,
      name: "Dashboard",
      link: "/dashboard",
      icon: (
        // <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
        //   <path
        //     d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
        //     className="fill-current text-cyan-400 dark:fill-slate-600"
        //   ></path>
        //   <path
        //     d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
        //     className="fill-current text-cyan-200 group-hover:text-cyan-300"
        //   ></path>
        //   <path
        //     d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
        //     className="fill-current group-hover:text-sky-300"
        //   ></path>
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
          <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Sales",
      link: "/dashboard/sales",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   fill="none"
        //   viewBox="0 0 24 24"
        //   stroke-width="1.5"
        //   stroke="currentColor"
        //   class="size-6"
        // >
        //   <path
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //     d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        //   />
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-currency-rupee-nepalese"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
          <path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Products",
      link: "/dashboard/products",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     fill-rule="evenodd"
        //     d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
        //     clip-rule="evenodd"
        //   />
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-building-warehouse"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21v-13l9 -4l9 4v13" />
          <path d="M13 13h4v8h-10v-6h6" />
          <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Report",
      link: "/dashboard/report",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     fill-rule="evenodd"
        //     d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        //     clip-rule="evenodd"
        //   />
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-report"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
          <path d="M18 14v4h4" />
          <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M8 11h4" />
          <path d="M8 15h3" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Supplier",
      link: "/dashboard/supplier",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
        //   />
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-users"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Orders",
      link: "/dashboard/orders",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
        //   />
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     fill-rule="evenodd"
        //     d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        //     clip-rule="evenodd"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-folders"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
          <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Manage Store",
      link: "/dashboard/stores",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
        //   />
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     fill-rule="evenodd"
        //     d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        //     clip-rule="evenodd"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l18 0" />
          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
          <path d="M5 21l0 -10.15" />
          <path d="M19 21l0 -10.15" />
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Create Account",
      link: "/dashboard/createAccount",
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   className="h-5 w-5"
        //   viewBox="0 0 20 20"
        //   fill="currentColor"
        // >
        //   <path
        //     className="fill-current text-gray-300 group-hover:text-cyan-300"
        //     d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
        //   />
        //   <path
        //     className="fill-current text-gray-600 group-hover:text-cyan-600"
        //     fill-rule="evenodd"
        //     d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        //     clip-rule="evenodd"
        //   />
        // </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-">
            <Link to="/dashboard" title="home" className="text-decoration-none">
              {/* Add the text-decoration-none class to the Link component */}
              {/* <h5 className="fw-bold text-decoration-none text-center">Shakya Handicraft</h5> */}
              <img
                src="/logo/file.png"
                alt=""
                loading="lazy"
                style={{ height: "65px", width: "300px" }}
              />
            </Link>
          </div>

          {/* <div className="mt-8 text-center">
          <img
              src="/images/blank.png"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Aayushma Shakya
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div> */}

          <ul className="space-y-2 tracking-wide mt-8">
            {dashboardMenu.map((m) => (
              <Link to={m.link} className="nav-link text-decoration-none">
                <li
                  key={m.id}
                  className={
                    window.location.pathname === m.link
                      ? "bg-gradient-to-r from-sky-500 to-cyan-300 active:text-white rounded-xl group"
                      : ""
                  }
                >
                  <div
                    className="px-4 py-3 flex items-center space-x-4 text-black hover:rounded-xl group"
                    onClick={() => {
                      window.location.pathname = m.link;
                    }}
                  >
                    {m.icon}
                    <span className="-mr-1 font-medium">{m.name}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="w-full px-4 py-3 mx-4 flex items-center space-x-4 rounded-md text-gray-600 hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-white">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Logout icon */}
            {/* </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e81111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            <button
              onClick={handleSignOut}
              className="btn fw-bold fs-5 text-danger p-0 mx-0"
            >
              Logout
            </button>
          </button>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}

export default HeaderAndSidebar;
