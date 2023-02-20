import React from "react";
import Element from "../helper/element";
const Sidebar = () => {
  return (
    <div
      className="col-md-3 col-lg-3 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ height: "100vh", backgroundColor: "#e9ecef" }}
    >
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3">
          <div className="card">
            <img
              src={Element.empimg}
              className="rounded card-img-top mx-auto"
              alt="employee"
            />
          </div>
        </li>

        <li className="nav-item mb-2 mt-3">
          <a className="nav-link text-secondary" href="#">
            <h5>Manager Name-</h5>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Email-</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Phone-</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Emp ID-</span>
          </a>
        </li>

        {/* <li className="nav-item mb-2">
                    <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a>
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""><i className="fas fa-book-reader"></i> Phone-</a></li>
                       <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""> <i className="fas fa-book-medical"></i> Emp ID-</a></li>
                    </ul>
                </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
