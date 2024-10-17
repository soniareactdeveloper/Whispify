import './ForgetPassword.css';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <section>
      <div className='mainForgetDiv'>
        <div className="forgetContent">
          <div className="forgetLogo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <h1>Reset Password</h1>
          <p>Enter your email to receive a reset link</p>

          {/* form */}
          <form action="#" className='forgetForm'>

            {/* Email */}
            <div className='inputContainer'>
              <input className='inputField' type="email" required />
              <label className='inputLabel'>Email Address</label>
            </div>

            {/* Reset Password Button */}
            <div className='resetBtn'>
              <Link to="/password-reset-success">Send Reset Link</Link>
            </div>

            {/* Back to Login */}
            <div className='backToLoginLink'>
              <p>Remember your password? <Link to="/login">Sign in</Link></p>
            </div>
            <h1>hello</h1>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
