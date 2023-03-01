import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import "./custom.css";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import * as xlsx from "xlsx";
const { Dragger } = Upload;

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState({}); //state to store employee
  const [employeeTimeSheet, setEmployeeTimeSheet] = useState([]); //state to store employee timesheet
  const [showSnack, setShowSnack] = useState(false); //
  const [snackMsg, setSnackMsg] = useState(""); //

  useEffect(() => {
    const getEmployeeData = async () => {
      if (Object.keys(employee).length === 0) {
        await axios
          .all([
            axios.get(
              "https://localhost:7101/api/Employee/GetEmployeeByEmail",
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            ),
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
              setEmployee(res[0].data);
              setEmployeeTimeSheet(res[1].data);
            })
          )
          .catch((error) => {
            // Handle any errors that occur during the execution of the requests
            console.log(error);
          });
      }
    };
    getEmployeeData();
  }, []);

  const readExcelFile = (e) => {
    e.preventDefault();
    const readFile = () => {
      if (e.target.files) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          handleExcelUpload(json);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
    };
    readFile();
  };

  const handleExcelUpload = async (prop) => {
    await axios
      .post("https://localhost:7101/api/TimeSheet/SaveTimeSheet", prop[0], {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setSnackMsg(res.data);
        setShowSnack(true);
        setTimeout(() => {
          setShowSnack(false);
        }, 2000);
        console.log("data inserted");
      })
      .catch((err) => {
        console.log("error " + err);
      });
  };

  return (
    <>
      {Object.keys(employee).length === 0 &&
      Object.keys(employeeTimeSheet).length === 0 ? (
        <Loader />
      ) : (
        <div>
          {/* <Navbar /> */}
          <Navbar breadcrumbs={"Employee Dashboard"} />

          <div className="row mx-0">
            {/* Sidebar */}
            <div className="card col-2 vh-100 sticky-bottom top-0 left-0 ps-4 cust-sidebar-padding cust-bg-th1 rounded-0">
              <div>
                {/* <img
                  src={Element.user}
                  className="rounded card-img-top mx-auto"
                  alt="employee"
                /> */}
                <div className="card-body text-white ps-0">
                  <h2 className="card-title m-0 ">{employee.employeeName}</h2>
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

            <div className="col-10 cust-content-padding ">
              {/* upload excel */}
              {console.log(snackMsg.isSuccess)}
              {showSnack ? (
                <div className="position-relative">
                  <div
                    className="position-absolute end-0 rounded-3 p-2 text-white bg-primary"
                    style={{ zIndex: 3 }}
                  >
                    {snackMsg.message}
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* <button
                type="button"
                className="btn btn-primary"
                id="liveToastBtn"
                onClick={console.log("click")}
              >
                Show live toast
              </button>

              <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
                <div
                  id="liveToast"
                  className="toast bg-primary"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                </div>
              </div> */}
              <div className="card text-center ms-3 mt-3">
                <div className="card-body p-4">
                  <div>
                    <label htmlFor="fileUpload">
                      <div className="btn mb-2 cust-upload-btn border-0">
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
                </div>

                {/* time sheet table */}
                <div>
                  <table className="table table-striped ps-3">
                    <thead>
                      <tr className="cust-bg-th1 text-white">
                        <th>Timesheet ID</th>
                        <th>Hours</th>
                        <th>Period Start</th>
                        <th>Period End</th>
                        <th>Project Name</th>
                        <th>Manager Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeTimeSheet.reverse().map((e, i) => {
                        return (
                          <tr key={i}>
                            <td>{e.timesheetID}</td>
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
                                  `${e.status}` === 1
                                    ? "badge text-bg-warning text-white"
                                    : `${e.status}` === 2
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
