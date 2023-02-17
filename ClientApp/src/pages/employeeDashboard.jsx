import React from "react";
import Navbar from "../components/navbar";
import Element from "../helper/element";
import {
  EmployeeCurrentData,
  EmployeePreviousData,
} from "../helper/employeeData";

const EmployeeDashboard = () => {
  return (<div>
    <Navbar/>
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
          {/* <div className="col text-end">
            <img
              className="ms-2"
              src={Element.home}
              alt="search"
              height="24px"
              width="24px"
            />
            <img
              className="ms-2"
              src={Element.bar}
              alt="search"
              height="24px"
              width="24px"
            />
            <img
              className="ms-2"
              src={Element.log}
              alt="search"
              height="24px"
              width="24px"
            />
          </div> */}
        </div>

        {/* upload excel */}
        <div className="card text-center">
          <div className="card-body p-4">
            <a href="/abc" className="btn btn-primary mb-2">
              Upload Excel
            </a>
            <p className="m-0 text-decoration-underline">OR,Drag & drop file</p>
          </div>
        </div>

        {/* current allowance */}
        <div>
          <div className="hstack gap-4">
            <div className="fw-semibold fs-6">Current allowance status</div>
            <hr className="w-75 border-2"></hr>
          </div>
          {/* current allowance card */}
          <div>
            {EmployeeCurrentData.map((e, index) => {
              console.log(e.managerID);
              return (
                <div className="mt-2" key={index}>
                  <div className="card">
                    <div className="card-body row">
                      <div className="col">
                        <div>
                          <h6 className="card-subtitle">
                            Manager Name: {e.managerName}
                          </h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.managerID}
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="card-subtitle">
                            Project Name: {e.projectName}
                          </h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.projectID}
                          </div>
                        </div>
                      </div>
                      <div className="col text-end">
                        <div className="">
                          <h6 className="card-subtitle">Hours</h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.hours}
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="card-subtitle">Status</h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>

        {/* previous allowance */}
        <div className="mt-4">
          <div className="hstack gap-3">
            <div className="fw-semibold fs-6">Previous allowance status</div>
            <hr className="w-75 border-2"></hr>
          </div>
          <div className="mb-2">
            {EmployeePreviousData.map((e, index) => {
              console.log(e.managerID);
              return (
                <div className="mt-2" key={index}>
                  <div className="card">
                    <div className="card-body row">
                      <div className="col">
                        <div>
                          <h6 className="card-subtitle">
                            Manager Name: {e.managerName}
                          </h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.managerID}
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="card-subtitle">
                            Project Name: {e.projectName}
                          </h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.projectID}
                          </div>
                        </div>
                      </div>
                      <div className="col text-end">
                        <div className="">
                          <h6 className="card-subtitle">Hours</h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.hours}
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="card-subtitle">Status</h6>
                          <div
                            className="text-secondary fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {e.stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="mt-2">
              <div className="card">
                <div className="card-body row">
                  <div className="col">
                    <div>
                      <h6 className="card-subtitle">Manage Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Project Name</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        #123456
                      </div>
                    </div>
                  </div>
                  <div className="col text-end">
                    <div className="">
                      <h6 className="card-subtitle">Hours</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        45
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="card-subtitle">Status</h6>
                      <div
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        In-Draft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeeDashboard;
