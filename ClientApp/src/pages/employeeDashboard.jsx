import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Element from "../helper/element";
import {
  EmployeeCurrentData,
  // EmployeePreviousData,
} from "../helper/employeeData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  axios.get("");

  // useEffect(() => {
  //   // setEmail();
  //   axios
  //     .get("https://localhost:7101/api/Employee/GetEmployeeByEmail/email")
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="row mx-0 mt-5">
          {/* Sidebar */}
          <div className="col-3 h-100 sticky-lg-top top-0 left-0  pt-4">
            <div>
              <div className="card">
                <img
                  src={Element.empimg}
                  className="rounded card-img-top mx-auto"
                  alt="employee"
                />
                <div className="card-body">
                  <h5 className="card-title">Employee Name</h5>
                  <p className="card-text">some text regarding employee</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Email</li>
                  <li className="list-group-item">Phone</li>
                  <li className="list-group-item">Emp ID</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-8 mt-4">
            {/* Search Bar and Icon */}
            <div className="row">
              <div className="input-group mb-3 col">
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
            </div>

            {/* upload excel */}
            <div className="card text-center">
              <div className="card-body p-4">
                <a href="/abc" className="btn btn-primary mb-2">
                  Upload Excel
                </a>
                <p className="m-0 text-decoration-underline">
                  OR,Drag & drop file
                </p>
              </div>
            </div>

            {/* current allowance */}
            <div>
              <div className="hstack gap-4 mt-4">
                {/* <div className="fw-semibold fs-6 border rounded bg-primary text-white p-1">
                  This month report
                </div> */}
                <div className="fw-semibold fs-6">This month report</div>
                <hr className="w-75 border-2"></hr>
              </div>
              {/* current allowance card */}
              <div>
                {/* {EmployeeCurrentData.forEach((e, index) => {
                  return ( */}
                <table className="table">
                  <thead>
                    <tr>
                      {EmployeeCurrentData.header.map((ei, i) => {
                        return (
                          <th scope="col" key={i}>
                            {ei}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {EmployeeCurrentData.body.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td scope="row">{e.id}</td>
                          <td>{e.user}</td>
                          <td>{e.hours}</td>
                          <td>{e.startDate}</td>
                          <td>{e.endDate}</td>
                          <td>
                            <span
                              className={
                                `${e.status}` === "Approved"
                                  ? "badge text-bg-success"
                                  : `${e.status}` === "Cancelled"
                                  ? "badge text-bg-danger"
                                  : "badge text-bg-warning text-white"
                              }
                            >
                              {e.status}
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
    </>
  );
};

export default EmployeeDashboard;
