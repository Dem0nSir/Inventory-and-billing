import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
const DashCard = () => {
  // useEffect(() => {
  //     const element = document.getElementById('kt_apexcharts_3');
  //     const height = parseInt(window.getComputedStyle(element).height);
  //     const labelColor = getComputedStyle(document.documentElement).getPropertyValue('--kt-gray-500');
  //     const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--kt-gray-200');
  //     const baseColor = getComputedStyle(document.documentElement).getPropertyValue('--kt-info');
  //     const lightColor = getComputedStyle(document.documentElement).getPropertyValue('--kt-info-light');

  //     const options = {
  //         series: [{
  //             name: 'Net Profit',
  //             data: [30, 40, 40, 90, 90, 70, 70]
  //         }],
  //         chart: {
  //             fontFamily: 'inherit',
  //             type: 'area',
  //             height: height,
  //             toolbar: {
  //                 show: false
  //             }
  //         },
  //         plotOptions: {},
  //         legend: {
  //             show: false
  //         },
  //         dataLabels: {
  //             enabled: false
  //         },
  //         fill: {
  //             type: 'solid',
  //             opacity: 1
  //         },
  //         stroke: {
  //             curve: 'smooth',
  //             show: true,
  //             width: 3,
  //             colors: [baseColor]
  //         },
  //         xaxis: {
  //             categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  //             axisBorder: {
  //                 show: false,
  //             },
  //             axisTicks: {
  //                 show: false
  //             },
  //             labels: {
  //                 style: {
  //                     colors: labelColor,
  //                     fontSize: '12px'
  //                 }
  //             },
  //             crosshairs: {
  //                 position: 'front',
  //                 stroke: {
  //                     color: baseColor,
  //                     width: 1,
  //                     dashArray: 3
  //                 }
  //             },
  //             tooltip: {
  //                 enabled: true,
  //                 formatter: undefined,
  //                 offsetY: 0,
  //                 style: {
  //                     fontSize: '12px'
  //                 }
  //             }
  //         },
  //         yaxis: {
  //             labels: {
  //                 style: {
  //                     colors: labelColor,
  //                     fontSize: '12px'
  //                 }
  //             }
  //         },
  //         states: {
  //             normal: {
  //                 filter: {
  //                     type: 'none',
  //                     value: 0
  //                 }
  //             },
  //             hover: {
  //                 filter: {
  //                     type: 'none',
  //                     value: 0
  //                 }
  //             },
  //             active: {
  //                 allowMultipleDataPointsSelection: false,
  //                 filter: {
  //                     type: 'none',
  //                     value: 0
  //                 }
  //             }
  //         },
  //         tooltip: {
  //             style: {
  //                 fontSize: '12px'
  //             },
  //             y: {
  //                 formatter: function (val) {
  //                     return '$' + val + ' thousands'
  //                 }
  //             }
  //         },
  //         colors: [lightColor],
  //         grid: {
  //             borderColor: borderColor,
  //             strokeDashArray: 4,
  //             yaxis: {
  //                 lines: {
  //                     show: true
  //                 }
  //             }
  //         },
  //         markers: {
  //             strokeColor: baseColor,
  //             strokeWidth: 3
  //         }
  //     };

  //     if (element) {
  //         const chart = new Chart(element, options);
  //         chart.render();
  //     }
  // }, []);
  return (
    <>
      <div className="m-4 mt-2 fs-1 text-center">
        Inventory Management System
      </div>
      <div className="row gx-5 gx-xl-10">
        {/*begin::Col*/}
        <div className="col-sm-4 mb-5 mb-xl-10">
          {/*begin::List widget 1*/}
          <div className="card card-flush h-lg-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <div className="d-flex align-items-center">
                  <img src="/icons/cart4.svg" alt="" className="me-2" />
                  <span className="card-label fw-bold text-dark">
                    Total Sales
                  </span>
                </div>
              </h3>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-3 ">
              {/* <div className="card-body d-flex align-items-end pt-2 justify-content-end px-2"> */}
                <div className="d-flex align-items-center flex-column  w-100 justify-content-end">
                  <div className="d-flex flex-column flex-sm-row justify-content-between fw-bold fs-6 text-black opacity-75 w-100 mt-auto mb-2 pt-2">
                    <span className="text-gray-400">Rs 1000000</span>

                    <span className="text-muted fs-7">
                      {" "}
                      50%
                      {/* {grandTotal === 40 && policyTotal === 40 && onboardingTotal === 20
                      ? '3 of 3 complete'
                      : ((grandTotal === 40 ? 1 : 0) + (policyTotal === 40 ? 1 : 0) + (onboardingTotal === 20 ? 1 : 0)) === 2 
                      ? '2 of 3 complete'
                      : grandTotal === 40 || policyTotal === 40 || onboardingTotal === 20
                      ? '1 of 3 complete'
                      : '0 of 3 complete'} */}
                    </span>
                  </div>
                </div>
              {/* </div> */}
              {/*begin::Item*/}
              {/* <div className="d-flex flex-stack">
               
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  <div className="d-inline-block align-middle me-1">
                    <img src="/media/logos/ControlsTotal.svg" alt="" />
                  </div>
                  Total Controls
                </div>

                <div className="d-flex align-items-senter">
           
                  <span className="text-gray-900 fw-bolder fs-6">2</span>
              
                </div>
          
              </div> */}
              {/*end::Item*/}
              {/*begin::Separator*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::LIst widget 1*/}
        </div>
        {/*end::Col*/}

        <div className="col-sm-4 mb-5 mb-xl-10">
          {/*begin::List widget 1*/}
          <div className="card card-flush h-lg-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">
                  Total Expenses
                </span>
              </h3>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-3">
              <div className="card-body d-flex align-items-end pt-2 justify-content-end px-2">
                <div className="d-flex align-items-center flex-column  w-100 justify-content-end">
                  <div
                    className="h-12px mx-0 w-100 rounded"
                    style={{ backgroundColor: "#DAF9EF" }}
                  >
                    <div
                      className="rounded h-8px"
                      role="progressbar"
                      style={{
                        width: `${Math.min(10, 100)}%`,
                        backgroundColor: "#44DBAF",
                      }}
                      aria-valuenow={Math.min(10, 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  <div className="d-inline-block align-middle me-1">
                    <img src="/media/logos/ControlsTotal.svg" alt="" />
                  </div>
                  Rs 100000
                </div>

                {/*end::Section*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-senter">
                  {/*begin::Number*/}
                  <span className="text-gray-900 fw-bolder fs-6">10%</span>
                  {/*end::Number*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::LIst widget 1*/}
        </div>

        <div className="col-sm-4 mb-5 mb-xl-10">
          {/*begin::List widget 1*/}
          <div className="card card-flush h-lg-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">
                  {" "}
                  Total Income
                </span>
              </h3>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-3">
              <div className="card-body d-flex align-items-end pt-2 justify-content-end px-2">
                <div className="d-flex align-items-center flex-column  w-100 justify-content-end">
                  <div className="d-flex flex-column flex-sm-row justify-content-between fw-bold fs-6 text-black opacity-75 w-100 mt-auto mb-2 pt-2">
                    <span className="text-gray-400">Controls OK</span>

                    <span className="text-muted fs-7">
                      {" "}
                      10%
                      {/* {grandTotal === 40 && policyTotal === 40 && onboardingTotal === 20
                      ? '3 of 3 complete'
                      : ((grandTotal === 40 ? 1 : 0) + (policyTotal === 40 ? 1 : 0) + (onboardingTotal === 20 ? 1 : 0)) === 2 
                      ? '2 of 3 complete'
                      : grandTotal === 40 || policyTotal === 40 || onboardingTotal === 20
                      ? '1 of 3 complete'
                      : '0 of 3 complete'} */}
                    </span>
                  </div>

                  <div
                    className="h-12px mx-0 w-100 rounded"
                    style={{ backgroundColor: "#DAF9EF" }}
                  >
                    <div
                      className="rounded h-8px"
                      role="progressbar"
                      style={{
                        width: `${Math.min(10, 100)}%`,
                        backgroundColor: "#44DBAF",
                      }}
                      aria-valuenow={Math.min(10, 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  <div className="d-inline-block align-middle me-1">
                    <img src="/icons/cart4.svg" alt="" />
                  </div>
                  Total Controls
                </div>

                {/*end::Section*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-senter">
                  {/*begin::Number*/}
                  <span className="text-gray-900 fw-bolder fs-6">2</span>
                  {/*end::Number*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::LIst widget 1*/}
        </div>
      </div>
    </>
  );
};

export default DashCard;
