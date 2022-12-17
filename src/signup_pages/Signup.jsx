import { konectinIcon } from "../assets";
function Signup() {
  return (
    <div>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 bg-image">
        </div>
        <div className="col-md-6">
          <div className="header-content">
            <img src={konectinIcon} />
            <h2 className="account-title">Create an Account</h2>
            <h4 className="sub-title">Get started with us at konectin</h4>
          </div>
          <form action="#">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g John Dane John"
                className="form-controls"
              />
            </div>
            <div>
              <label className="email_label">Email</label>
              <input
                type="text"
                placeholder="e.g johndanejohn@gmail.com"
                className="form-controls"
              />
            </div>
            <div>
              <label className="password_label">Password</label>
              <input
                type="password"
                placeholder="Minimum of 8 Characters"
                className="form-controls"
              />
            </div>
            <div>
              <label className="confirm_password_label">Confirm Password</label>
              <input
                type="password"
                placeholder="Minimum of 8 Characters"
                className="form-controls confirm_password"
              />
            </div>
            <div className="form-check">
             <div>
             <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
             </div>
            <div>
            <label className="form-check-label" for="flexCheckDefault">
              I agree to Konnectin <a href="#">TERMS OF SERVICE</a>  and <a href="#">PRIVACY POLICY</a>
              </label>
            </div>
            </div>
          </form>
          <div className="btn_wrapper">
            <button className="btn btn-lg signup-btn">Sign up</button>
          </div>
          <div className="or_wrapper">
            <p className="text-center">or</p>
          </div>
          <div className="btn_wrapper2">
            <button className="btn btn-lg google-btn">Continue with Google</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Signup;
