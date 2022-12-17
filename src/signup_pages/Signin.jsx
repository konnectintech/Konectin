import { konectinIcon } from "../assets";
function Signin() {
  return (
    <div className="signin_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bg-image"></div>
          <div className="col-md-6 acct-section">
            <div className="header-content">
              <img src={konectinIcon} />
              <h2 className="account-title">Welcome Back...</h2>
              <h4 className="sub-title">Continue from where you stopped</h4>
            </div>
            <form action="#">
              <div>
                <label>Full Name</label>
                <input type="text" className="form-controls" />
              </div>
              <div>
                <label className="password_label">Password</label>
                <input type="password" className="form-controls" />
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
                  <label
                    className="form-check-label d-flex justify-content-between fpassword"
                    for="flexCheckDefault"
                  >
                    <p> Remember me </p>
                    <p>
                      <a href="#">Forgot password?</a>
                    </p>
                  </label>
                </div>
              </div>
            </form>
            <div className="btn_wrapper">
              <button className="btn btn-lg signup-btn">Sign in</button>
            </div>
            <div className="or_wrapper">
              <p className="text-center">or</p>
            </div>
            <div className="btn_wrapper2">
              <button className="btn btn-lg google-btn">
                Continue with Google
              </button>
            </div>
            <div className="not_yet_a_member">
              <p>
                You don’t have an account ? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
