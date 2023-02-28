import React, { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
import Element from "../helper/element";
// import {
//   EmployeeCurrentData,
//   // EmployeePreviousData,
// } from "../helper/employeeData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import "./custom.css";
// import { setAuthToken } from "../auth/auth";

import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import * as xlsx from "xlsx";
const { Dragger } = Upload;

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  const [employee, setEmployee] = useState({});
  const [employeeTimeSheet, setEmployeeTimeSheet] = useState([]);
  const [timeSheetDetail, setTimeSheetDetail] = useState({});

  useEffect(() => {
    // setEmail();
    axios
      .all([
        axios.get("https://localhost:7101/api/Employee/GetEmployeeByEmail", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }),
        axios.get(
          "https://localhost:7101/api/TimeSheet/GetTimeSheetByEmailId",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        ),
      ])
      .then(
        axios.spread((...res) => {
          // Handle responses from each request
          console.log(res);
          setEmployee(res[0].data);
          setEmployeeTimeSheet(res[1].data);
          console.log(employeeTimeSheet);
        })
      )
      .catch((error) => {
        // Handle any errors that occur during the execution of the requests
        console.log(error);
      });
  }, []);

  const readExcelFile = (e) => {
    e.preventDefault();
    const readFile = async () => {
      if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          console.log(json);
          handleExcelUpload(json);

          // setTimeSheetDetail(json);
          // console.log(timeSheetDetail);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
    };
    readFile();
    // console.log(timeSheetDetail.length);
    // timeSheetDetail?.length > 0 ? handleExcelUpload() : console.log("some");
  };

  const handleExcelUpload = async (prop) => {
    // console.log(timeSheetDetail.length);
    // setTimeSheetDetail(prop.data);
    console.log("upload excel func");
    console.log(prop[0]);
    setTimeSheetDetail(prop[0]);
    console.log(timeSheetDetail);
    if (timeSheetDetail) {
      await axios
        .post("https://localhost:7101/api/TimeSheet/SaveTimeSheet", prop[0], {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          console.log("data inserted");
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    } else {
      console.log("No data selected");
    }
  };

  return (
    <>
      {Object.keys(employee).length === 0 &&
      Object.keys(employeeTimeSheet).length === 0 ? (
        <Loader />
      ) : (
        <div>
          <Navbar breadcrumbs={"Employee Dashboard"} />

          {/* <Navbar /> */}
          <div className="row mx-0">
            {/* Sidebar */}
            <div className=" card col-2 vh-100 sticky-lg-top top-0 left-0 p-3 pt-4 cust-bg-th1 rounded-0">
              <div>
                {/* <img
                  src={Element.user}
                  className="rounded card-img-top mx-auto"
                  alt="employee"
                /> */}
                <div className="card-body text-white ps-0">
                  <h5 className="card-title m-0 ">{employee.employeeName}</h5>
                  <p className="fw-bold m-0" style={{ fontSize: "0.8rem" }}>
                    {employee.employeeID}
                  </p>
                </div>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item cust-bg-th1 text-white ps-0">
                    <div className="m-0 fw-bold cust-f-sidebar">DEPARTMENT</div>
                    {employee.department}
                  </li>
                  <li className="list-group-item cust-bg-th1 text-white ps-0">
                    <div className="m-0 fw-bold cust-f-sidebar">EMAIL</div>
                    {employee.employeeEmail}
                  </li>
                  <li className="list-group-item cust-bg-th1 text-white ps-0">
                    <div className="m-0 fw-bold cust-f-sidebar">DOJ</div>
                    {new Date(employee?.doj).toLocaleDateString("en-GB")}
                    {/* {Date(employee.doj)}{" "} */}
                  </li>
                  <li className="list-group-item cust-bg-th1 text-white ps-0">
                    <div className="m-0 fw-bold cust-f-sidebar">DOB</div>
                    {new Date(employee?.dob).toLocaleDateString("en-GB")}
                  </li>
                  <li className="list-group-item cust-bg-th1 text-white ps-0">
                    <div className="m-0 fw-bold cust-f-sidebar">Contact</div>
                    {employee.phoneNumber}{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-10 ps-0">
              {/* Search Bar and Icon */}
              {/* <div>
                <label htmlFor="fileUpload">
                  <div className="btn">upload</div>
                </label>
                <input hidden id="fileUpload" type="file" accept=".xls,.xlsx" />
              </div> */}

              {/* upload excel */}
              <div className="card text-center ms-3 mt-3">
                <div className="card-body p-5">
                  <div>
                    <label htmlFor="fileUpload">
                      <div
                        className="btn mb-2 cust-upload-btn border-0"
                        // onClick={() => handleExcelUpload()}
                      >
                        Upload Excel
                      </div>
                    </label>
                    <input
                      hidden
                      id="fileUpload"
                      type="file"
                      accept=".xls,.xlsx"
                      onChange={readExcelFile}
                    />
                  </div>
                  <Dragger>
                    <p className="ant-upload-drag-icon m-0">
                      <InboxOutlined style={{ color: "#ef4923" }} />
                    </p>

                    <p className="ant-upload-text">
                      Click or drag file to upload
                    </p>
                  </Dragger>
                </div>
              </div>

              {/* <div className="card text-center ms-3 mt-3">
                <div className="card-body p-4">
                  <div
                    className="btn mb-2 cust-upload-btn border-0"
                    type="file"
                  >
                    Upload Excel
                  </div>
                  <p className="m-0 text-decoration-underline">
                    OR,Drag & drop file
                  </p>
                </div>
              </div> */}

              {/* current allowance */}
              <div className="ps-3">
                <div className="hstack mt-4 mb-2">
                  <div className="hstack gap-2 col">
                    <input
                      type="radio"
                      className="btn-check "
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary btn-sm cust-btn "
                      htmlFor="btnradio1"
                    >
                      This Month
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                    />
                    <label className="btn btn-sm cust-btn" htmlFor="btnradio2">
                      All
                    </label>
                  </div>
                  {/* Search Bar */}
                  {/* <div className="row col">
                    <div className="input-group col">
                      <span className="input-group-text" id="basic-addon1">
                        <img
                          src={Element.search}
                          alt="search"
                          height="24px"
                          width="24px"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div> */}
                </div>

                {/* time sheet table */}
                <div>
                  <table className="table table-striped ps-3">
                    <thead>
                      <tr className="cust-bg-th1 text-white">
                        <th>Timesheet ID</th>
                        {/* <th>Employee ID</th> */}
                        <th>Hours</th>
                        <th>Period Start</th>
                        <th>Period End</th>
                        <th>Project Name</th>
                        <th>Manager Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeTimeSheet.map((e, i) => {
                        return (
                          <tr key={i}>
                            <td>{e.timesheetID}</td>
                            {/* <td>{e.employeeID}</td> */}
                            <td>{e.hours}</td>
                            <td>
                              {new Date(e.periodStart).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td>
                              {new Date(e.periodEnd).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td>{e.projectName}</td>
                            <td>{e.managerName}</td>
                            <td>
                              <span
                                className={
                                  `${e.status}` == 1
                                    ? "badge text-bg-warning text-white"
                                    : `${e.status}` == 2
                                    ? "badge text-bg-success"
                                    : "badge text-bg-danger"
                                }
                              >
                                {e.status === 1
                                  ? "InDraft"
                                  : e.status === 2
                                  ? "Approved"
                                  : "Denied"}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDashboard;
