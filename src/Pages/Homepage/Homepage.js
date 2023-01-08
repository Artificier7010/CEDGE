import React from 'react';
import Mycarousel from '../../Components/Carousel/Mycarousel';
import Navbar from '../../Components/Navbar/Navbar';
import './homepage.scss';
import img1 from '../../Assets/Images/dance.jpg';
import img2 from '../../Assets/Images/dMOTION-2015_webpage-banner_756_2.jpg';

const Homepage = () => {
    // let data=[]
    let data = [
        {
            heading: "The Training pro",
            subheading: "Experience full-body workouts featuring the hottest songs, hype instructors, and dance moves you’d actually do IRL.",
            img: img1
        },
        {
            heading: "Start With The Basics",
            subheading: "No rhythm? No confidence? No clue where to start? Take our top rated “Intro to Dance” program alongside over 200,000 other new dancers",
            img: img2
        }
    ]
    return (
        <div className="Homepage">

            {/* Sections Start */}
            {/* ================================================ */}
            <div className="pageWrapper">

                <div className="section-wrapper">
                    {/* Navbar */}
                    <Navbar
                        isLogedIn={false}
                    />

                    {/* Section 1 */}
                    <div className="home-section1">
                        <div className="home-header">
                            <div className="dark-overlay">
                                <div className="header-content">
                                    <h1>MAKE A MOVE</h1>
                                    <span className='sub-lines'>With online classes, programs, and more.</span>
                                    <button className='big-btns-theme1'>LET'S DANCE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="home-section2">
                        <div className="quote-banner">
                            <span className='bannr-quote'>“There are shortcuts to happiness, and dancing is one of them.” </span>
                            <p className='quote-author'>-Vicki Baum-</p>
                        </div>

                        {data.length > 0 ? (
                            <div className="promo-banner">
                                <Mycarousel
                                    carouselData={data}
                                />
                            </div>
                        ) : null}

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Homepage;
