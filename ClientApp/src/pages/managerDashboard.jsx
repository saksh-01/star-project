import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Element from "../helper/element";

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

  return (
    <div className="col main pt-5 mt-3">
      <nav aria-label="breadcrumb">
        {/* <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol> */}
      </nav>
      <div className="input-group mb-3 col">
        <span className="input-group-text" id="basic-addon1">
          <img src={Element.search} alt="search" height="24px" width="24px" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
      <p className="lead d-none d-sm-block">Requests</p>

      {/* <div
        className="alert alert-warning fade collapse"
        role="alert"
        id="myAlert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div> */}
      {/* <Link to ='/review'> */}

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
      {/* </Link> */}

      <hr />
      {/* <div className="row placeholders mb-3">
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span className="text-muted">Device agnostic</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span className="text-muted">UI / UX oriented</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span className="text-muted">Standards-based</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span className="text-muted">CSS and JavaScript</span>
            </div>
        </div> */}
    </div>
  );
};

export default Dashboard;
