import React from 'react';
import './signup.scss';
import logoicon from '../../Assets/Images/smallicon.png';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  return (
    <div className='Signup'>
      <div className='s-wrap'>
        {/* Left side */}
        <div className='s-left'>
          <div className="hone-nav-btn">
            <Link><span class="material-symbols-outlined">
              home
            </span></Link>
          </div>

        </div>
        {/* Right side  */}
        <div className='s-right'>
          <div className="login-frm-wrap">
            <form action="/auth/register" method="POST">
              <div className="logo">
                <img src={logoicon} alt="logo" width={60} />
              </div>
              <h1>LOGIN</h1>
              <div className='input-box'>
                <input type="text" class="form-control" id="e-mail" placeholder="EMAIL" name="email"></input>
              </div>
              <div className='input-box'>
                <input type="text" class="form-control" id="password" placeholder="PASSWORD" name="password"></input>
              </div>
              <div className='text1'>
                <a href="/login">Forgot your password ?</a>
              </div>
              <div className='btns-wrap'>
                <button >LOG IN</button>
              </div>
            </form>
            <div className='divider'>
              <div className='l-div'>
              </div>
              <div className="or-div">or</div>
              <div className="r-div">
              </div>
            </div>
            <div className='btns-wrap'>
              <button style={{background:"#4867aa",color:"#ffffff"}}>LOGIN WITH FACEBOOK</button>
            </div>
            <div className='btns-wrap'>
              <button>LOGIN WITH GOOGLE</button>
            </div>
            <div className='text2'>
              <span>Don't have a account ? <a href="/login">Sign Up</a></span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup