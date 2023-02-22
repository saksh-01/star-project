import React, { Component, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import RequireAuth from "./helper/requireAuth";
import "./custom.css";
import { setAuthToken } from "./auth/auth";

const App = () => {
  // useEffect(() => {
  //   const setToken = async () => {
  //     console.log("app");
  //     await setAuthToken(localStorage.getItem("token"));
  //   };
  //   setToken();
  // }, []);
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const { element, ...rest } = route;
        console.log(rest);
        return rest.path === "/" ? (
          <Route key={index} {...rest} element={element} />
        ) : (
          <Route
            key={index}
            {...rest}
            element={<RequireAuth>{element}</RequireAuth>}
          />
        );
      })}
    </Routes>
  );
};

export default App;
