import { useEffect, useState } from "react";
import { Link, useNavigate, useHistory, useLocation } from "react-router-dom";
import Element from "../helper/element";
import Navbar from "../components/navbar";
import axios from "axios";
import "./custom.css";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const [requestsToManager, setRequestsToManager] = useState([]);

  console.log(window.location.pathname);

  const openReviewPage = (prop) => (event) => {
    console.log(prop.timesheetID);
    navigate("/review", {
      state: { prop },
    });
  };

  useEffect(() => {
    const getRequestsToManager = async () => {
      await axios
        .get(
          "https://localhost:7101/api/TimeSheet/GetAllTimeSheetsUnderManager",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRequestsToManager(res.data);
          console.log(requestsToManager);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRequestsToManager();
  }, []);

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
            <label className="btn btn-sm cust-btn" htmlFor="btnradio1">
              This Month Requests
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-sm cust-btn" htmlFor="btnradio2">
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

        <div className="row row-cols-3 mt-3">
          {requestsToManager?.map((e, i) => {
            console.log(e);
            return (
              <div
                className="col mb-3"
                key={i}
                onClick={openReviewPage(e)}
                // onClick={() => location("review")}
              >
                <div className="card shadow-sm cust-shadow btn text-start bg-light border-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="badge bg-primary">{e.projectName}</span>
                    </div>
                    <div>
                      <h6 className="fw-bold m-0">{e.employeeName}</h6>
                      <p className="fw-bold m-0 cust-f-review-card">
                        {e.employeeID}
                      </p>
                      {/* <span className="badge bg-primary">{e.employeeID}</span> */}
                    </div>
                    <div>
                      <h6 className="fw-bold m-0">Hours</h6>
                      <p className="fw-bold m-0 cust-f-review-card">
                        {e.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
