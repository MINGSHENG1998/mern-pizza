import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  });

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5 fixed-oversized-row">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
          {loading && <Loading size="2rem"/>}
          {error && <Error error="Login Failed!" />}
          <h1 className="text-center m-2" style={{ fontSize: "35px" }}>
            <b>Login</b>
          </h1>
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button className="pizza_btn mt-4" onClick={() => login()}>
              LOGIN
            </button>
            <br />
            <a
              style={{ fontSize: "12px" }}
              href="/register"
              className="text-decoration-none text-dark py-2"
            >
              Click here to Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
