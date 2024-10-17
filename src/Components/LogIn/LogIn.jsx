import './LogIn.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <section className="mainLoginDiv">
      <div className="loginContent">
        <div className="logLogo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <h1>Login</h1>
        <p>Free register and you can enjoy it</p>

        {/* form */}
        <form action="#" className="logForm">

          {/* Email */}
          <div className="inputContainer">
            <input className="inputField" type="email" required />
            <label className="inputLabel">Email Address</label>
          </div>

          {/* Password */}
          <div className="inputContainer">
            <input className="inputField" type="password" required />
            <label className="inputLabel">Password</label>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="rememberMe">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <div className="links">
              <Link to="/forgot-password" className="forgotPassword">Forgot Password?</Link>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="logBtn">
            <button type="submit">Sign In</button>
          </div>

          {/* Sign Up Link */}
          <div className="signupLink">
            <p>Don't have an account? <Link to="/register" className="text-[#64B5F6]">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
