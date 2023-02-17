import React, { useState } from "react";
import Element from "../helper/element";
import { userEmailSchema, userPasswordSchema } from "../helper/userValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate;

  const [registration, setRegistration] = useState({
    email: "",
    password: "",
  });

  const handleChange = (props) => (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    setRegistration({ ...registration, [props]: value });
  };

  // (() => {
  //   // "use strict";

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // const forms = document.querySelectorAll(".needs-validation");

  //   console.log(forms);
  //   // Loop over them and prevent submission
  // Array.from(forms).forEach((form) => {
  //   form.addEventListener(
  //     "submit",
  //     (event) => {
  //       if (!form.checkValidity()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }

  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });
  // })();

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
        .post("https://localhost:7101/api/login", {
          email: registration.email,
          password: registration.password,
        })
        .then((res) => {
          console.log(res);
          console.log("success");
          console.log(res.status === 200);
          // if (res.status === 200) {
          // () => {
          //   navigate(1);
          // };
          // }
          // if (res.data.message === "success") {
          //   console.log(res);

          //   // authenticate(res, () => {
          //   //   isAuth()
          //   //     ? history.push({
          //   //         pathname: `/userInfo/${res.data.user._id}`,
          //   //         params: {
          //   //           fault: true,
          //   //         },
          //   //       })
          //   //     : console.log("enter corret detail")
          //   // updateSnack("Enter correct detail", "error");
          //   // });
          // } else if (res.data.message === "not found") {
          //   console.log("user not found");
          //   // updateSnack("User not found, Singup please", "info");
          // } else {
          //   console.log("incorret pass");
          //   // updateSnack("Incorrect password", "error");
          // }
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

  // const myStyle = {
  //   ".was-validated .custom-select:valid ": {
  //     backgroundImage: "none",
  //   },
  // };
  return (
    <div className="position-fixed h-100 w-100 d-flex row">
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
              required
              // style={myStyle}
            />
            {/* <div className="valid-feedback">Looks good!</div> */}
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
            {/* <div className="valid-feedback">Looks good!</div> */}
          </div>
          <div className="">
            <button className="btn btn-primary" type="submit">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
