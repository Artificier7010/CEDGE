import React from 'react';
import './loginpage.scss';
import logo from '../../Assets/Images/smallicon.png';

const login = () => {
  return (
    <div className="Loginpage">
      <div className="mainwrap">

        {/* left section  */}


        <div className="leftcontainer">

        </div>

        {/* right section  */}


        <div className="rightcontainer">
          <div className="right-cont-content">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1 className='headlog'>Login</h1>
            <div className="login-form">
              <form>
                <div className="mail">
                  <label>Email</label>
                  <input required type="email" placeholder='Email' name='email' />
                </div>
                <div className="password">
                  <label>Password</label>
                  <input name='password' placeholder='Password' required />
                  {/* <span><a>Forget you'r Password?</a></span> */}
                </div>
                <div className="space">

                </div>
                <div className="two-buttons">
                  <div className="button">
                    <button className='link-btns'>Login</button>
                  </div>
                  <div className="button">
                    <button className='link-btns'>Login with Google</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login