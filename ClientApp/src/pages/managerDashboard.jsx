import { useEffect, useState } from "react";
import { Link, useNavigate, useHistory, useLocation } from "react-router-dom";
import Element from "../helper/element";
import Navbar from "../components/navbar";

const Dashboard = () => {
  //    const[record,setRecord] = useState([])

  //    const getData = () =>
  //    {
  //        fetch('https://jsonplaceholder.typicode.com/users')
  //        .then(resposne=> resposne.json())
  //        .then(res=>setRecord(res))
  //    }

  //    useEffect(() => {
  //       getData();
  //    },)
  const navigate = useLocation();
  console.log(navigate.pathname);

  console.log(window.location.pathname);

  return (
    <>
      <Navbar breadcrumbs={"Manager Dashboard"} />
      <div className="px-4 pt-3">
        <div className="hstack mb-2">
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
              className="btn btn-outline-primary btn-sm btn-fc-sh"
              htmlFor="btnradio1"
            >
              This Month Requests
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-primary btn-sm btn-fc-sh"
              htmlFor="btnradio2"
            >
              All
            </label>
          </div>
          {/* Search Bar */}
          <div className="row col">
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
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card  h-100">
              <div className="card-body">
                <a
                  href="/review"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
            <div className="card text-white h-100">
              <a
                href="/review"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6>Employee</h6>
                  <p>Location</p>
                  <h1 className="display-4"></h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
