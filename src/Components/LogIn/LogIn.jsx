import './LogIn.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <section>
      <div className='mainLoginDiv'>
        <div className="loginContent">
          <div className="logLogo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <h1>Login</h1>
          <p>Free register and you can enjoy it</p>
          {/* form */}
          <form className='logForm'>
            {/* Email */}
            <div className='relative'>
              <label htmlFor="email">Email Address</label>
              <br />
              <input type="email" id='email' name='email' placeholder='Your Email' />
            </div>

            <br />

            {/* Password */}
            <div className='relative'>
              <label htmlFor="pass">Password</label>
              <br />
              <input type="password" id='pass' name='pass' placeholder='Your Password' />
            </div>

            {/* Log in button */}
            <div className='logBtn'>
              <Link to='/'>Sign In</Link>
            </div>

            {/* Forgot Password */}
            <div className='forgotPass flex'>
              <Link to='/forgot-password'>Forgot Password?</Link>
               <div>
                <label className='relative' htmlFor="rem">Remember Me</label>
                <input type="checkbox" id='rem' name='rem' />
               </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
