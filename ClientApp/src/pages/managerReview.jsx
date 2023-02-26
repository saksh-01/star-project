import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Element from "../helper/element";
import "./custom.css";
import axios from "axios";

const ManagerReview = () => {
  const location = useLocation();
  // const [employeeDetail, setEmployeeDetail] = useState(location.state.prop);
  const employeeDetail = location.state.prop;
  const navigate = useNavigate();
  const [style, setStyle] = useState("");
  const [msg, setMsg] = useState("");
  const [updateStatusCode, setUpdateStatusCode] = useState(1);
  const [updateTimeSheetID, setUpdateTimeSheetID] = useState("");
  const [reviewDetail, setReviewDetail] = useState({
    email: employeeDetail.employeeEmail,
    message: null,
  });

  const showModal = ({ message, val }) => {
    setStyle("cust-modal");
    setMsg(message);
    console.log(val);
    setUpdateStatusCode(val);
    setUpdateTimeSheetID(employeeDetail.timesheetID);
    console.log(employeeDetail.timesheetID);
    console.log(updateStatusCode);
    console.log(updateTimeSheetID);
  };

  const hideModal = () => {
    setStyle("");
  };

  const handleChange = (props) => (e) => {
    const value = e.target.value;
    setReviewDetail({ ...reviewDetail, [props]: value });
  };

  const handleTimeSheetStatus = async () => {
    // if (empTimeSheetStatus.Status && empTimeSheetStatus.TimeSheetID) {
    console.log(updateStatusCode);
    console.log(updateTimeSheetID);
    console.log(employeeDetail.timesheetID);

    console.log(reviewDetail.message);
    if (reviewDetail.message != null) {
      if (updateStatusCode != 1 && updateTimeSheetID) {
        await axios
          .post(
            "https://localhost:7101/api/TimeSheet/updateTimeSheetStatusByManager",
            {
              TimeSheetID: updateTimeSheetID,
              StatusCode: updateStatusCode,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data.isSuccess) {
              console.log("data updated");
              navigate("/manager");
            }
            console.log(res.data.isSuccess);
            // navigate("/manager");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("some eror");
        console.log(updateStatusCode);
        console.log(updateTimeSheetID);
      }
    } else {
      console.log("adding validation");
      const valid = document.getElementsByClassName("needs-validation")[0];
      valid.classList.add("was-validated");
    }
  };
  return (
    <>
      <Navbar breadcrumbs={"Review"} />
      <div className="px-5 pt-3 mb-5 ">
        <div>
          <img src={Element.user} alt="user" height="120px" width="120px" />
        </div>

        {/* Employee Detail */}
        <div className="d-flex fw-bold mt-3 cust-text-th2">
          Employee Detail
          <hr className="col ms-3"></hr>
        </div>
        <div className="d-flex gap-3">
          <div className="mb-3 col-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Employee ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              // placeholder="name@example.com"
              value={employeeDetail.employeeID}
              disabled
              readOnly
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Employee Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              // placeholder="name@example.com"
              value={employeeDetail.employeeName}
              disabled
              readOnly
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput3"
              // placeholder="name@example.com"
              value={employeeDetail.employeeEmail}
              disabled
              readOnly
            />
          </div>
        </div>

        {/* timesheet details */}
        <div className="d-flex fw-bold mt-3 cust-text-th2">
          Timesheet Detail
          <hr className="col ms-3"></hr>
        </div>
        <div className="d-flex gap-3">
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              TimeSheet ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput4"
              // placeholder="name@example.com"
              value={employeeDetail.timesheetID}
              disabled
              readOnly
            />
          </div>

          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput5" className="form-label">
              Hours
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput5"
              // placeholder="name@example.com"
              value={employeeDetail.hours}
              disabled
              readOnly
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput6" className="form-label">
              Period Start
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput6"
              // placeholder="name@example.com"
              value={new Date(employeeDetail.periodStart).toLocaleDateString(
                "en-GB"
              )}
              disabled
              readOnly
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput7" className="form-label">
              Period End
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput7"
              // placeholder="name@example.com"
              value={new Date(employeeDetail.periodEnd).toLocaleDateString(
                "en-GB"
              )}
              disabled
              readOnly
            />
          </div>
        </div>

        {/* Project Detail */}
        <div className="d-flex fw-bold mt-3 cust-text-th2">
          Project Detail
          <hr className="col ms-3"></hr>
        </div>
        <div className="d-flex gap-3">
          <div className="mb-3 col-2">
            <label htmlFor="exampleFormControlInput8" className="form-label">
              Project ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput8"
              // placeholder="name@example.com"
              value={employeeDetail.projectID}
              disabled
              readOnly
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleFormControlInput9" className="form-label">
              Project Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput9"
              // placeholder="name@example.com"
              value={employeeDetail.projectName}
              disabled
              readOnly
            />
          </div>
        </div>

        {/* Approve & Deny Btn */}

        <div
          className={`modal ${style}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  New message to {msg}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={hideModal}
                ></button>
              </div>
              <div className="modal-body">
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      placeholder="@incedoinc.com"
                      value={reviewDetail.email}
                      disabled
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="validationTextarea" className="form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="validationTextarea"
                      placeholder="Required example textarea"
                      onChange={(e) => {
                        setReviewDetail({
                          ...reviewDetail,
                          ["message"]: e.target.value,
                        });
                      }}
                      value={reviewDetail.message ? reviewDetail.message : ""}
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={hideModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    // hideModal();
                    handleTimeSheetStatus();
                  }}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex mx-auto justify-content-between"
          style={{ width: "15%" }}
        >
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              showModal({ message: "Approve", val: 2 });
            }}
          >
            Approve
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => {
              showModal({ message: "Deny", val: 0 });
            }}
          >
            Deny
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagerReview;
