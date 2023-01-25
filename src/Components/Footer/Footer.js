import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <div className="cut-edge-design"></div>
      <div className="footer-container">
        <div className="foot-cols">
          <h1 className='logo'>CREATIVE EDGE</h1>
          <div className="cpy-right-wrap">
            <span className='cpy-rgt'>COPYRIGHT © 2023 CREATIVE EDGE.</span>
            <span className='cpy-rgt'>ALL RIGHTS RESERVED.</span>
          </div>
        </div>
        <div className="foot-cols">
          <div className="contact-sub">
            <h2>Get The Latest Updates On Email</h2>
            <input type="text" placeholder={props.windowSize[0] <= 990 ? 'Enter Your Email' :'Email'} />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="foot-cols">
          <ul className='foot-menu'>
            <li><Link>BLOG</Link></li>
            <li><Link>ABOUT</Link></li>
            <li><Link>TERMS</Link></li>
            <li><Link>PRIVACY</Link></li>
          </ul>
        </div>
        <div className="foot-cols">
          {props.windowSize[0] <= 990 ? (
            <ul className='foot-menu-mobl'>
              <li><Link><FaInstagram className='icons' /></Link></li>
              <li><Link><FaFacebookF className='icons' /></Link></li>
              <li><Link><FaYoutube className='icons' /></Link></li>
              <li><Link><FaTwitter className='icons' /></Link></li>
            </ul>
          ) : (
            <ul className='foot-menu'>
              <li><Link><FaInstagram className='icons' /> INSTAGRAM</Link></li>
              <li><Link><FaFacebookF className='icons' /> FACEBOOK</Link></li>
              <li><Link><FaYoutube className='icons' />  YOUTUBE</Link></li>
              <li><Link><FaTwitter className='icons' /> TWITTER</Link></li>
            </ul>

          )}
        </div>

      </div>

    </div>
  )
}

export default Footer;