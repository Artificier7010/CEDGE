import React from 'react'
import './blog.scss'
import Footer from '../../Components/Footer/Footer'
import Blogcontent from '../../Components/Blogcomponents/BolgContent/Blogcontent'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    let postdata = [
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
        {
            title: "Creative Edge is looking For the Mover",
            category: "Dance",
            link: ""
        },
    ]
    return (
        <div className="Blog">
            <div className="blogwrap">

                {/* navbar section */}

                <div className="navbar">
                    <Navbar
                        isLogedIn={true}
                        windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                    />
                </div>


                {/* first section  */}


                <div className="firstsectio">
                    <div className="leftsection">

                    </div>
                    <div className="rightsection">
                        <div className="rightcontent">
                            <span>{postdata[0].title}</span>
                            <button>Read Article </button>
                        </div>
                    </div>
                </div>




                {/* second section */}

                <div className="secondsection">

                    <div className="postwrap">
                        {/* second navbar */}

                        <div className="secondnav">
                            <div className="second-navwrap">
                                <ul>
                                    <li><Link to={'#'}>Choreography</Link></li>
                                    <li><Link to={'#'}>Dancing</Link></li>
                                    <li><Link to={'#'}>Breaking</Link></li>
                                    <li><Link to={'#'}>Popping</Link></li>
                                    <li><Link to={'#'}>Insider</Link></li>
                                </ul>
                            </div>
                        </div>
                        <Blogcontent
                            heading={"Spot Light"}
                            postData={postdata}
                            windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                        />
                    </div>

                </div>

                {/* third section  */}

                <div className="thirdsection">
                    <h3>Whant More Tips ?</h3>
                    <span>Subscribe For Crazy Dance Contents</span>
                    <button>Join Us</button>
                </div>

                {/* fourth section  */}

                <div className="fourthsection">
                    <h3>Catch Us Anywhere</h3>
                    <span>With App on IOS and Android , The Great Learning <br></br>Awaits You</span>
                </div>

                {/* footer section */}



                <div className="footer">
                    <Footer
                        windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                    />
                </div>

            </div>
        </div>
    )
}

export default Blog