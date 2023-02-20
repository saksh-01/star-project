import React from "react";
import Element from "../helper/element";

const ManagerReview = () => {
  return (
    // <div className="col-3 h-100 sticky-lg-top top-0 left-0 pt-4">
    <div>
      <div className="card m-3">
        <div className="d-flex hstack  gap-2 text-align-center">
          <img
            //style="height:42px;width:42px"
            src={Element.empimg}
            height="64px"
            width="64px!important"
            className="rounded  mx-auto"
            alt="employee"
          />
          <div className="card-body ">
            <h5 className="card-title m-0">Employee Name</h5>
            <p
              className="card-title text-secondary m-0"
              style={{ fontSize: "13px" }}
            >
              Posting
              {/* <font color="grey">Posting</font> */}
            </p>
            <p
              className="card-title text-secondary m-0"
              style={{ fontSize: "13px" }}
            >
              Designation
              {/* <font color="grey">Designation</font> */}
            </p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Employee Data.....</li>
          <li className="list-group-item">Employee Data.....</li>
          <li className="list-group-item">Employee Data.....</li>
        </ul>
      </div>
      <div
        className="d-flex mx-auto justify-content-between"
        style={{ width: "15%" }}
      >
        <button className="btn btn-primary" type="button">
          correct
        </button>
        <button className="btn btn-primary" type="button">
          incorrect
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ManagerReview;
