import React from "react";
import { useNavigate } from "react-router-dom";
import Element from "../helper/element";
import "../pages/custom.css";
import { logout } from "../auth/auth";
export const Navbar = ({ breadcrumbs }) => {
  const navigate = useNavigate();
  console.log(breadcrumbs);
  return (
    <div className="d-flex fixed-top justify-content-between px-4 cust-bg-th1 text-white py-3">
      <div className="fw-bold ">{breadcrumbs}</div>
      <div className="d-block text-end">
        <div
          className="me-2 cust-tooltip d-inline"
          onClick={() =>
            breadcrumbs === "Manager Dashboard"
              ? navigate("/employee")
              : navigate("/manager")
          }
        >
          <img type="button" src={Element.grid} alt="logout" />
          <span className="cust-tooltiptext">
            {breadcrumbs === "Manager Dashboard"
              ? "Employee Dashboard"
              : "Manager Dashboard"}
          </span>
        </div>
        <div
          className="cust-tooltip d-inline"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <img type="button" src={Element.log} alt="logout" />
          <span className="cust-tooltiptext2">Log Out</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
