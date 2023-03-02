import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "./custom.css";
import axios from "axios";

const ManagerReview = () => {
  const location = useLocation();
  const employeeDetail = location.state.prop;
  // console.log(employeeDetail);
  const navigate = useNavigate();
  const [style, setStyle] = useState("");
  const [msg, setMsg] = useState("");
  const [updateTimesheetStatus, setUpdateTimesheetStatus] = useState({
    TimeSheetID: "",
    StatusCode: 1,
  });
  // const [updateStatusCode, setUpdateStatusCode] = useState(1); // state to store status
  // const [updateTimeSheetID, setUpdateTimeSheetID] = useState(""); // state to store timesheetID
  const [reviewDetail, setReviewDetail] = useState({
    toEmail: "kushavgarg75@gmail.com",
    body: null,
    subject: employeeDetail.timesheetID + "-Timesheet Status Updated",
    senderName: employeeDetail.managerName,
  }); // state to store email and message given my manager

  const showModal = ({ message, val }) => {
    setMsg(message);
    setUpdateTimesheetStatus({
      TimeSheetID: employeeDetail.timesheetID,
      StatusCode: val,
    });
    setStyle("cust-modal");
    // setUpdateStatusCode(val);
    // setUpdateTimeSheetID(employeeDetail.timesheetID);
    // if (val == 2) {
    //   handleTimeSheetStatus();
    // } else if (val == -1) setStyle("");
    // else
  };

  const handleTimeSheetStatus = async () => {
    if (reviewDetail.body != null) {
      console.log("handle request");
      if (
        updateTimesheetStatus.StatusCode != 1 &&
        updateTimesheetStatus.TimeSheetID
      ) {
        await axios
          .all([
            axios.post(
              "https://localhost:7101/api/TimeSheet/updateTimeSheetStatusByManager",
              updateTimesheetStatus,
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            ),
            axios.post(
              "https://localhost:7101/api/Email/sendEmail",
              reviewDetail,
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            ),
          ])

          .then(
            axios.spread((...res) => {
              console.log(res);
              if (res[0].data.isSuccess) {
                navigate("/manager");
              }
            })
          )
          .catch((err) => {
            console.log("error " + err);
          });
      } else {
        console.log(updateTimesheetStatus);
        console.log("some error");
      }
    } else {
      const valid = document.getElementsByClassName("needs-validation")[0];
      valid.classList.add("was-validated");
    }
  };
  return (
    <>
      <Navbar breadcrumbs={"Review"} />
      <div className="px-5 cust-content-padding mb-5 ">
        {/* <div>
          <img src={Element.user} alt="user" height="120px" width="120px" />
        </div> */}

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
              className="form-control"
              id="exampleFormControlInput1"
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
              className="form-control"
              id="exampleFormControlInput2"
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
              className="form-control"
              id="exampleFormControlInput3"
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
              className="form-control"
              id="exampleFormControlInput4"
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
              className="form-control"
              id="exampleFormControlInput5"
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
              className="form-control"
              id="exampleFormControlInput6"
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
              className="form-control"
              id="exampleFormControlInput7"
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
              className="form-control"
              id="exampleFormControlInput8"
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
              className="form-control"
              id="exampleFormControlInput9"
              value={employeeDetail.projectName}
              disabled
              readOnly
            />
          </div>
        </div>

        {/* Modal to send message */}
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
                  New message to{" "}
                  {updateTimesheetStatus.StatusCode == 2 ? "Approve" : "Deny"}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setStyle("");
                  }}
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
                      value={employeeDetail.employeeEmail}
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
                      placeholder="Required message"
                      onChange={(e) => {
                        setReviewDetail({
                          ...reviewDetail,
                          body: e.target.value,
                        });
                      }}
                      // value={reviewDetail.body ? reviewDetail.body : ""}
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter a message.
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setStyle("");
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("handle send message");
                    handleTimeSheetStatus();
                  }}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Approve & Deny Btn */}
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
