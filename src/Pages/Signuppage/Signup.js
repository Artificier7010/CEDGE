import React from 'react';
import './signup.scss';

const Signup = () => {
  return (
    <div className='Signup'>
      <div className='s-wrap'>
        {/* Left side */}
        <div className='s-left'>

        </div>
        {/* Right side  */}
        <div className='s-right'>
          <form action="/auth/register" method="POST">
            <h1>LOGIN</h1>
            <div className='input1'>
              <input type="text" class="form-control" id="e-mail" placeholder="EMAIL" name="email"></input>
            </div>
            <div className='input2'>
              <input type="text" class="form-control" id="password" placeholder="PASSWORD" name="password"></input>
            </div>
            <div className='text1'>
              <a href="/login">Forgot your password ?</a>
            </div>
            <div className='button1'>
              <button>LOG IN</button>
            </div>
            <div className='button2'>
              <button>LOGIN WITH FACEBOOK</button>
            </div>
            <div className='button3'>
              <button>LOGIN WITH GOOGLE</button>
            </div>
            <div className='text2'>
              <span>Don't have a account ? <a href="/login">Sign Up</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup