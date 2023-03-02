import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import axios from "axios";
import "./custom.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [requestsToManager, setRequestsToManager] = useState([]);
  const [filterRequestsToManager, setFilteredEmployeeTimesheet] = useState([]);

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
          setRequestsToManager(res.data);
          setFilteredEmployeeTimesheet(
            res.data.filter((e) => {
              return e.status == 1;
            })
          );
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    };
    getRequestsToManager();
  }, []);

  const showRequestBasedOnStatus = (val) => {
    setFilteredEmployeeTimesheet(
      requestsToManager.filter((e) => {
        return e.status == val;
      })
    );
  };

  return (
    <>
      <Navbar breadcrumbs={"Manager Dashboard"} />
      <div className="px-4 cust-content-padding">
        <div className="hstack mb-2">
          <div className="hstack gap-2 col">
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
              onClick={() => showRequestBasedOnStatus(1)}
            />
            <label className="btn btn-sm cust-btn" htmlFor="btnradio1">
              New Requests
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              onClick={() => showRequestBasedOnStatus(2)}
            />
            <label className="btn btn-sm cust-btn" htmlFor="btnradio2">
              Approved
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio4"
              autoComplete="off"
              onClick={() => showRequestBasedOnStatus(0)}
            />
            <label className="btn btn-sm cust-btn" htmlFor="btnradio4">
              Denied
            </label>
          </div>
        </div>

        <div className="row row-cols-3 mt-3">
          {console.log(filterRequestsToManager.length)}
          {filterRequestsToManager.length == 0 ? (
            filterRequestsToManager.map((e, i) => {
              return (
                <div className="col mb-3" key={i} onClick={openReviewPage(e)}>
                  <div className="card shadow-sm cust-shadow btn text-start bg-light border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="badge bg-primary">
                          {e.projectName}
                        </span>
                        {() => {
                          if (e.status == 20)
                            return (
                              <span className="badge bg-success">APPROVED</span>
                            );
                          else if (e.status == 0)
                            return (
                              <span className="badge bg-danger">DENIED</span>
                            );
                          else return <></>;
                        }}
                      </div>
                      <div>
                        <h6 className="fw-bold m-0">{e.employeeName}</h6>
                        <p className="fw-bold m-0 cust-f-review-card">
                          {e.employeeID}
                        </p>
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
            })
          ) : (
            <h1>Not a manager</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
