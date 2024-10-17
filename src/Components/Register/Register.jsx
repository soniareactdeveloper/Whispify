import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section>
      <div className='mainRegisterDiv'>
        <div className="registerContent">
          <div className="regLogo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <h1>Register</h1>
          <p>Create an account to enjoy our services</p>

          {/* form */}
          <form action="#" className='regForm'>
            
            {/* Name */}
            <div className='inputContainer'>
              <input className='inputField' type="text" required />
              <label className='inputLabel'>Full Name</label>
            </div>

            {/* Email */}
            <div className='inputContainer'>
              <input className='inputField' type="email" required/>
              <label className='inputLabel'>Email Address</label>
            </div>

            {/* Password */}
            <div className='inputContainer'>
              <input className='inputField' type="password" required />
              <label className='inputLabel'>Password</label>
            </div>

            {/* Confirm Password */}
            <div className='inputContainer'>
              <input className='inputField' type="password" required />
              <label className='inputLabel'>Confirm Password</label>
            </div>

            {/* Register Button */}
            <div className='regBtn'>
              <Link to="/">Register</Link>
            </div>
            
            {/* Login Link */}
            <div className='loginLink'>
              <p>Already have an account? <Link to="/login" className='text-[#64B5F6]'>Sign in</Link></p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
