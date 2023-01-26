import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './instcarouse.scss';

const Instcarouse = (props) => {
    return (
        <OwlCarousel className='owl-theme' nav navText={[
            "<div className='nav-left-btn'><span class=material-symbols-outlined>arrow_back_ios</span></div>",
            "<div className='nav-right-btn'><span class=material-symbols-outlined> arrow_forward_ios</span></div>"]}
             autoplay={true} loop margin={8} autoplaySpeed={3000} fallbackEasing items={props.windowSize[0] <=1025 ? 1 :3} dots={false}>
            {props.instructorsData.map((intruc, index) => {
                return (
                    <div key={index} className="item instcarouse-card">
                        <div className="inst-prof-img">
                            <img src={intruc.img} alt="prof-pic" />
                            <div className="black-overlay">
                                <h3>{intruc.name}</h3>
                                <h4>{intruc.dStyle}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}

        </OwlCarousel>

    )
}

export default Instcarouse