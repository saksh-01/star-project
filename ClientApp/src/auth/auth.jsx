import React from "react";
import axios from "axios";

export const authenticate = () => {
  return <div></div>;
};

export const isAuthenticated = () => {
  let flag = false;

  //check user has JWT token
  flag = localStorage.getItem("token") ? true : false;
  console.log(flag);

  return flag;
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const logout = () => {
  localStorage.clear();

  //remove specific item from localstorage
  // localStorage.removeItem("Item");
};
