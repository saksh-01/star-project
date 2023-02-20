import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import RequireAuth from "./helper/requireAuth";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
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
  }
}
