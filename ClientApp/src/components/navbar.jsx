import React from "react";
import { useNavigate } from "react-router-dom";
import Element from "../helper/element";
import "../pages/custom.css";
import { logout } from "../auth/auth";
export const Navbar = ({ breadcrumbs }) => {
  const navigate = useNavigate();
  console.log(breadcrumbs);
  return (
    <div className="d-flex justify-content-between px-4 bg-th1 text-white py-3">
      <div className="fw-bold ">{breadcrumbs}</div>
      <div className="d-block text-end">
        <div
          className="me-2 tt d-inline"
          onClick={() =>
            breadcrumbs === "Manager Dashboard"
              ? navigate("/employee")
              : navigate("/manager")
          }
        >
          <img type="button" src={Element.grid} alt="logout" />
          <span className="tooltiptext">
            {breadcrumbs === "Manager Dashboard"
              ? "Employee Dashboard"
              : "Manager Dashboard"}
          </span>
        </div>
        <div
          className="tt d-inline"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <img type="button" src={Element.log} alt="logout" />
          <span className="tooltiptext2">Log Out</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
