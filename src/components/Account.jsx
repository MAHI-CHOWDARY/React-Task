import React from "react";

const Account = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 col-md-8 mx-auto my-5">
          <div className="card border" >
            <div className="px-5 py-3">
              <p className="fs-5 fw-bold">Account Settings</p>
            </div>
            <div style={{ backgroundColor: "whitesmoke",paddingBottom:"200px" }} className="px-5 pt-3">
              <div className="row align-items-center">
                {/* Image on Left */}
                <div className="col-6">
                  <div className="profile-wrapper text-left">
                    <img
                      src="/pic.jpg"
                      alt="Profile"
                      className="profile-img"
                    />
                    <div className="camera-icon">
                      <i className="bi bi-camera-fill"></i>
                    </div>
                  </div>
                </div>
                   <div className="col-6">
          <p className="mb-1"><strong>Mahendra</strong></p>
          <p>mahi@gmail.com</p>
        </div>
              <p className="mt-3" style={{fontWeight:"500"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laudantium exercitationem possimus, veritatis fuga expedita deserunt dolore laborum animi quas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
