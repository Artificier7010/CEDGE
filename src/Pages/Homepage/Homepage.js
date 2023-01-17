import React from 'react';
import Mycarousel from '../../Components/Carousel/Mycarousel';
import Navbar from '../../Components/Navbar/Navbar';
import './homepage.scss';
import { Addata, danceStylesData, instructorsData } from '../../Dummydata/Dummy';
import Instcarouse from '../../Components/InstructorCarouse/Instcarouse';

const Homepage = (props) => {

// STATIC DATA FETCHING
    let data = Addata;
    const danceStyles = danceStylesData;
    const instructors=instructorsData;
    return (
        <div className="Homepage">

            {/* Sections Start */}
            {/* ================================================ */}
            <div className="pageWrapper">

                <div className="section-wrapper">
                    {/* Navbar */}
                    <Navbar
                        isLogedIn={true}
                        windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
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


                    {/* Section 3 */}
                    <div className="home-section3">
                        <div className="main-heading">
                            <h1>Explore Diffrent <span className='highlighted'>Dance</span> Forms</h1>
                        </div>

                        <div className="dance-styles">
                            <div className="dance-styles-wraper">

                                {danceStyles.map((styles, indx) => {

                                    return (
                                        <div key={indx} class="styles-card">
                                            <div className="card-img">
                                                <img src={styles.background} alt="styles" />
                                            </div>
                                            <div className="card-desc">
                                                <h2>{styles.name}</h2>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                    </div>

                    {/* Section 4 */}
                    <div className="home-section4">
                        <div className="main-heading">
                            <h1>Meet <span className='highlighted'>Our</span> Instructors</h1>
                            <h4><span className='highlighted'>Creative Edge</span> boasts a team of highly respected and accomplished dance instructors in the industry.</h4>
                        </div>

                        <div className="instructors-section">
                            <div className="instr-left">
                                <h4>Recognized for their expertise in imparting world-class dance techniques and choreography. Whether you prefer group or private instruction, their guidance will enable you to master the art of dance and perform with confidence.</h4>
                            </div>
                            <div className="instr-right">
                                <Instcarouse
                                instructorsData={instructors? instructors:[]}
                                windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                                />
                            </div>

                        </div>
                    </div>

                    {/* SECTION 5 */}
                    <div className="home-section5">
                        
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Homepage;
