import React from 'react';
import { Link } from 'react-router-dom';
import './bottomnav.scss';

const Bottomnav = (props) => {


    return (
        <div className='Bottomnav'>
            {props.windowSize[0] <= 990 ? (

                <div className="bottomnav-menu-wrap">
                    {props.isLogedIn ? (
                        <ul className='bottmnav-menu'>
                            <li title='Home'><Link to={'/Signup'}><span class="material-symbols-outlined">home</span></Link></li>
                            <li title='Info'><Link to={'/Signup'}><span class="material-symbols-outlined">info</span></Link></li>
                            <li title='Blog' className='uniq-icon'><Link to={'/Signup'}><span class="material-symbols-outlined">feed</span></Link></li>
                            <li title='Store'><Link to={'/Signup'}><span class="material-symbols-outlined">storefront</span></Link></li>
                            <li title='Account'><Link to={'/Signup'}><span class="material-symbols-outlined">manage_accounts</span></Link></li>
                        </ul>

                    ) : (
                        <div className="bottomnav-banner">
                            <span>Create A New Step With Us</span>
                            <Link className='link-btns' to={'/signup'}>Sign Up</Link>
                        </div>
                    )}

                </div>

            ) : (
                <div className="bottomnav-banner">
                    {props.isLogedIn ? (
                        <>Comming Soon</>
                    ) : (
                        <>
                            <span>Create A New Step With Us</span>
                            <Link className='link-btns' to={'/signup'}>Sign Up</Link>
                        </>
                    )
                    }

                </div >
            )}


        </div >
    )
}

export default Bottomnav;