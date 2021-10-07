import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/friends";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          //   dispatch(login({ username: "pretty", age: 10, sex: "female" }));
        }}
      >
        login
      </button>
    </div>
  );
};

export default Login;
