import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 col-md-8 mx-auto">
          <div
            className="card border  my-4 p-5"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <p className="legend">Signin to your PopX account</p>
            <p className="sign-in-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <form>
              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="custom-label required">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="custom-input"
                  placeholder="Marry Doe"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="custom-label required">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="custom-input"
                  placeholder="Marry Doe"
                  required
                />
              </div>

              <Link
                type="submit"
                className="btn btn-light-violet w-100 fw-bold"
                to={"/profile"}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
