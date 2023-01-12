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
        },
        {
            heading: "Start bc hello",
            subheading: "No rhythm? No confidence? No clue where to start? Take our top rated “Intro to Dance” program alongside over 200,000 other new dancers",
            img: ""
        },
        {
            heading: "Start With The Basics",
            subheading: "No rhythm? No confidence? No clue where to start? Take our top rated “Intro to Dance” program alongside over 200,000 other new dancers",
        },
    ]

    const danceStyles = [
        {
            name: "Hip Hop",
            background: "https://ik.imagekit.io/dexo68yudb/download.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548070347"
        },
        {
            name: "Contemporary",
            background: "https://ik.imagekit.io/dexo68yudb/Lord_Byron.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548131701"
        },
        {
            name: "Workout",
            background: "https://ik.imagekit.io/dexo68yudb/download__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548243024"
        },
        {
            name: "K-Pop",
            background: "https://ik.imagekit.io/dexo68yudb/__NAME__.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548401476"
        },
        {
            name: "Ballet",
            background: "https://ik.imagekit.io/dexo68yudb/download__2_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548466088"
        },
        {
            name: "Salsa",
            background: "https://ik.imagekit.io/dexo68yudb/image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548584369"
        },
        {
            name: "Popping",
            background: "https://ik.imagekit.io/dexo68yudb/image__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548754384"
        },
        {
            name: "Jazz",
            background: "https://ik.imagekit.io/dexo68yudb/image__2_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673548939819"
        },
        {
            name: "Lite Feet",
            background: "https://ik.imagekit.io/dexo68yudb/image__3_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673549137499"
        },
        {
            name: "Heels",
            background: "https://ik.imagekit.io/dexo68yudb/Heels_class__top_Babi_Beluco_testa_aula_de_dan%C3%A7a_com_salto_alto__hit_da_vez.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673549260774"
        },
        {
            name: "House",
            background: "https://ik.imagekit.io/dexo68yudb/Cvb.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673546450175"
        },
        {
            name: "Locking",
            background: "https://ik.imagekit.io/dexo68yudb/Mq21.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673546765482"
        },
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
                </div>

            </div>


        </div>
    )
}

export default Homepage;
