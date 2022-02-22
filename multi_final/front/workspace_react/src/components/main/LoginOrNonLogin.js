import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../main/MainTopNavberLogin.js";
import NotLogin from "../main/MainTopNavberNonLogin";

function LoginOrNonLogin() {
  let isAuthorized = sessionStorage.getItem("isAuthorized");

  return (
    <div>
      {!isAuthorized ? <Route to="/login" /> : <Route to="/" />}
      <Routes>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <NotLogin />
        </Route>
      </Routes>
    </div>
  );
}
export default LoginOrNonLogin;