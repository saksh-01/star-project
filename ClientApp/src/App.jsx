import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import RequireAuth from "./helper/requireAuth";
import "./custom.css";

const App = () => {
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const { element, ...rest } = route;
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
