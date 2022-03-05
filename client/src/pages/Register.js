import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const registerState = useSelector((state)=>state.registerUserReducer);
  const {error, loading, success} = registerState;

  const dispatch = useDispatch();

  function register() {
    if (password != cPassword) {
      alert("confirm password must same with password");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5 fixed-oversized-row">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
          {loading && <Loading/>}
          {error && <Error error="Registration Failed!"/>}
          {success && <Success success="Registration Success!"/>}
          <h1 className="text-center m-2" style={{ fontSize: "35px" }}>
            <b>Register</b>
          </h1>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
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
            <input
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cPassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            ></input>
            <button className="pizza_btn mt-4" onClick={() => register()}>
              REGISTER
            </button>
            <br />
            <a style={{ fontSize: "12px" }} href="/login" className="text-decoration-none text-dark py-2">
              Click here to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
