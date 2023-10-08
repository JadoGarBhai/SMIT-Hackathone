import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <form className="text-center mt-5">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <br />
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>

        <div class="col-12 text-center mt-5">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
