import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 col-md-8 mx-auto">
          <div className="card border  my-4 p-5" style={{backgroundColor:"whitesmoke"}}>
              <p className="legend">Create your PopX account</p>
               <form>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="custom-label required">Full Name</label>
            <input type="text" id="fullName" className="custom-input" placeholder="Marry Doe" required />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone" className="custom-label required">Phone number</label>
            <input type="tel" id="phone" className="custom-input" placeholder="Marry Doe" required />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email" className="custom-label required">Email address</label>
            <input type="email" id="email" className="custom-input" placeholder="Marry Doe" required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="custom-label required">Password</label>
            <input type="password" id="password" className="custom-input" placeholder="Marry Doe" required />
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="company" className="custom-label required">Company name</label>
            <input type="text" id="company" className="custom-input" placeholder="Marry Doe" />
          </div>

          {/* Are you an Agency? */}
          <div className="mb-3">
            <label className="form-label required d-block">Are you an Agency?</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" id="yes" value="yes" required />
              <label className="form-check-label" htmlFor="yes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" id="no" value="no" />
              <label className="form-check-label" htmlFor="no">No</label>
            </div>
          </div>

          <Link type="submit" className="btn btn-violet w-100" to={'/profile'}>Create Account</Link>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
