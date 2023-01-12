import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import btnsanim from '../../Assets/Images/btnsanim.gif';
import logo from '../../Assets/Images/logo.png';

const Navbar = (props) => {

    let islogined = props.isLogedIn;
    return (
        <div className="Navbar">

            {/* LEFT PART */}
            <div className="nav-left">
                <div className="logo">
                    {/* <h1>CREATIVE EDGE</h1> */}
                    <img src={logo} alt="logo" style={{width:"200px"}} />
                </div>

                <ul className="menus">
                    <li><Link to={"#"} >ABOUT</Link></li>
                    <li><Link>STYLES</Link></li>
                    <li><Link>FEATURE</Link></li>
                    <li><Link>PRICING</Link></li>
                </ul>
            </div>

            {/* RIGHT PART */}
            <div className="nav-right">
                {islogined ? (
                    <div className="userbtn">
                        <button className='userbtnhov'>
                            <span class="material-symbols-outlined">
                                face
                            </span>
                            <div className="userbtn-dropdown">
                                <ul className='user-menus'>
                                    <li><Link>PRODUCTS</Link></li>
                                    <li><Link>COURSES</Link></li>
                                    <li><Link>PROFILE</Link></li>
                                    <li><Link>SETTINGS</Link></li>
                                </ul>
                            </div>
                        </button>
                    </div>
                ) : (
                    <div className="nav-btns-web">
                        <img src={btnsanim} width={"25px"} alt={"dancing-anime"} />
                        <button> LOGIN</button>
                        <button>JOIN US</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar