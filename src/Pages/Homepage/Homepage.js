import React, { useState } from 'react';
import Mycarousel from '../../Components/Carousel/Mycarousel';
import Navbar from '../../Components/Navbar/Navbar';
import './homepage.scss';
import { Addata, danceStylesData, instructorsData } from '../../Dummydata/Dummy';
import Instcarouse from '../../Components/InstructorCarouse/Instcarouse';
import Bottomnav from '../../Components/BottomNav/Bottomnav';
import Footer from '../../Components/Footer/Footer';

const Homepage = (props) => {

    const [priceValue, setPriceValue] = useState(1500);
    const [categoryValue, setCategoryValue] = useState(0);
    const [monthValue, setMonthValue] = useState(1);

    // STATIC DATA FETCHING
    let data = Addata;
    const danceStyles = danceStylesData;
    const instructors = instructorsData;
    let onlinePrice = 199;
    let priceData = [
        {
            category: "Adults",
            priceDetails: [
                1500,
                3600,
                6000,
                11000
            ],
            months: [
                1,
                3,
                6,
                12
            ],
            saleDiscount: 20
        },
        {
            category: "Kids",
            priceDetails: [
                1000,
                2500,
                4500,
                8000
            ],
            months: [
                1,
                3,
                6,
                12
            ],
        }
    ]


    const handleMonthChange = (monthValue, prices) => {
        setPriceValue(prices[categoryValue].priceDetails[monthValue]);
        setMonthValue(prices[categoryValue].months[monthValue])
    }

    const handleCategoryChange = (categoryValue) => {
        console.log(categoryValue);
        setCategoryValue(categoryValue)
        setPriceValue(priceData[categoryValue].priceDetails[0]);
        setMonthValue(priceData[categoryValue].months[0])

    }
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
                                    instructorsData={instructors ? instructors : []}
                                    windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                                />
                            </div>

                        </div>
                    </div>

                    {/* SECTION 5 */}
                    <div className="home-section5">
                        <div className="about-cedge-section">
                            <h1>Our<span className='highlighted-text'>Services</span></h1>

                            <div className="about-card-wrapper">
                                {/* CARD 1 */}
                                <div className="abt-card">
                                    <div className="abt-card-icon">
                                        <div className="icon-box">
                                            <span class="material-symbols-outlined">live_tv</span>
                                        </div>
                                        <div className="icon-name">
                                            <h2>Sessions</h2>
                                        </div>
                                    </div>
                                    <div className="abt-card-description">
                                        <p>Take a leap in your art by unlocking an extensive collection of dance choreography and basic covering the top mentors of india, All this for free</p>
                                    </div>
                                </div>
                                {/* CARD 2 */}
                                <div className="abt-card">
                                    <div className="abt-card-icon">
                                        <div className="icon-box">
                                            <span class="material-symbols-outlined">query_stats</span>
                                        </div>
                                        <div className="icon-name">
                                            <h2>Analysis</h2>
                                        </div>
                                    </div>
                                    <div className="abt-card-description">
                                        <p>Not just correct moves , get a detailed explanation of all the performance live or behind the screens, work upon your weak areas</p>
                                    </div>
                                </div>
                                <div className="abt-card">
                                    <div className="abt-card-icon">
                                        <div className="icon-box">
                                            <span class="material-symbols-outlined">magic_button</span>
                                        </div>
                                        <div className="icon-name">
                                            <h2>Quality</h2>
                                        </div>
                                    </div>
                                    <div className="abt-card-description">
                                        <p>We belive that its not just enough to aim, you must hit your target. Thats why we bring the best quality courses to enhance your dance journey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Section 6 */}
                    <div className="home-section6">
                        <div className="main-heading">
                            <h1>Pick Your <span className='highlighted'>Plan</span></h1>
                            <h4><span className='highlighted'>Join Us</span> for a Premium plan to get unlimited access to 1500+ classes and our full range of instructors.</h4>
                        </div>
                        <div className="price-details-wrap">
                            <div className="price-left">
                                <div className="price-card">
                                    <div className="price-head">{priceData[0].saleDiscount ? priceData[0].saleDiscount + "% Sale" : "New Deals"}</div>
                                    <div className="price-details">
                                        <h1>Subscribe For Offline</h1>
                                        <ul className='price-list'>
                                            <li className='monthval'>{monthValue} Month{monthValue === 1 ? "" : "s"} Plan</li>
                                            <li className='priceval'>₹ {priceValue}</li>
                                            <li>Daily Practice Sessions</li>
                                            <li>All Online Courses Unlocked</li>
                                            <li>Free Live Sessions</li>
                                        </ul>
                                        <select onChange={(ev) => { handleMonthChange(ev.target.value, priceData) }} >
                                            <option value={0}>1 Month</option>
                                            <option value={1}>3 Month</option>
                                            <option value={2}>6 Month</option>
                                            <option value={3}>12 Month</option>
                                        </select>
                                        <select onChange={(ev) => { handleCategoryChange(ev.target.value) }}>
                                            <option value={0}>For Adults</option>
                                            <option value={1}>For Kids</option>
                                        </select>
                                        <button className='onln-btn'>Join Us</button>
                                    </div>
                                </div>
                            </div>
                            <div className="price-right">
                                <div className="price-card">
                                    <div className="price-head">
                                        {priceData[1].saleDiscount ? priceData[1].saleDiscount + "%" : "New Deals"}
                                    </div>
                                    <div className="price-details">
                                        <h1>Subscribe For Online</h1>
                                        <ul>
                                            <li className='monthval'>Get Every Course For Just Only</li>
                                            <li className='priceval'>₹ {onlinePrice}</li>
                                            <li>Get Certified Courses</li>
                                            <li>Instructors From All Over India</li>
                                            <li>Tests To Grow Yourself</li>
                                        </ul>
                                        <button className='onln-btn'>Join Us</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Bottom Nav */}
                    {/* ********************************* */}
                    <Bottomnav
                        isLogedIn={true}
                        windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                    />

                    {/* Footer Section */}
                    {/* ********************************* */}
                    <Footer
                     windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                    />
                </div>




            </div>








        </div>
    )
}

export default Homepage;
