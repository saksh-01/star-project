import React, { useState } from "react";
import Element from "../helper/element";
import { userEmailSchema, userPasswordSchema } from "../helper/userValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout, setAuthToken } from "../auth/auth";
import "./custom.css";

const Login = () => {
  const navigate = useNavigate();

  // logout();

  const [registration, setRegistration] = useState({
    email: "",
    password: "",
  });

  const handleChange = (props) => (e) => {
    const value = e.target.value;
    setRegistration({ ...registration, [props]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registration);
    const validEmail = await userEmailSchema.isValid({
      email: registration.email,
    });
    const validPassword = await userPasswordSchema.isValid({
      password: registration.password,
    });
    console.log(validEmail);
    console.log(validPassword);

    if (validEmail && validPassword) {
      await axios
        .post("https://localhost:7101/api/userlogin", {
          email: registration.email,
          password: registration.password,
        })
        .then((res) => {
          console.log(res);
          console.log("success");
          const token = res.data.token;

          //set JWT token to local
          localStorage.setItem("token", token);

          //set token to axios common header
          setAuthToken(token);
          navigate("/employee");
        })
        .catch((err) => {
          console.log(err);
          console.log("login error");
          // updateSnack("Login error, try again", "error");
        });
    } else {
      const form = document.getElementsByClassName("needs-validation")[0];
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
    }
  };

  return (
    <div
      className="position-fixed h-100 w-100 "
      style={{ background: "#20262E" }}
    >
      <div className="row row-cols-1 row-cols-md-2 h-75 mx-auto mt-5 p-0">
        <div className="sidelogo ps-3">
          <img
            src={Element.incedoLogoBG}
            alt="incedo"
            style={{
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
          <h6 className="tagline">WHERE INNOVATION PROPELS</h6>
        </div>

        <div className="col card p-5 rounded-pill cardStyle">
          <div className="form-card">
            <h1 style={{ color: "#EE4714" }}>SignIn</h1>
            <p>Enter your credentials to access your account</p>
            <form
              className="row needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="">
                <label htmlFor="validationCustom01" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="User email"
                  className="form-control"
                  id="validationCustom01"
                  value={registration.email}
                  onChange={handleChange("email")}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="validationCustom02" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom02"
                  value={registration.password}
                  onChange={handleChange("password")}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="">
                <button className="btn btn-primary" type="submit">
                  SignIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="position-fixed h-100 w-100 d-flex row">
      <div className="bg-primary col-7">
        <img src={Element.empimg} alt="side" />
      </div>
      <div
        className="p-4 bg-white mx-auto mt-5 col-5"
        // style={{ width: "30%" }}
      >
        <img
          className="mb-5"
          src={Element.incedoLogo}
          alt="incedo"
          height="60px"
          width="180px"
        />
        <p>Enter your credentials to access your account</p>
        <form
          className="row needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="">
            <label htmlFor="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="User email"
              className="form-control"
              id="validationCustom01"
              value={registration.email}
              onChange={handleChange("email")}
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              value={registration.password}
              onChange={handleChange("password")}
              placeholder="Password"
              required
            />
          </div>
          <div className="">
            <button className="btn btn-primary" type="submit">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div> */
}
