import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.scss';
import { Link } from 'react-router-dom';

const Mycarousel = (props) => {
  return (
    <OwlCarousel className='owl-theme' autoplay={true} loop margin={8} items={1}>
      {props.carouselData.map((item, indx) => {
        return (
          <div key={indx} class='item my-carousel-banner'>
            {item.img !== undefined & item.img !== "" ? (
              <img src={item.img} width={'100%'} height={'100%'} style={{ objectFit: "cover" }} alt="banner" />
            ) : null}
            <div className="black-overlay" style={{background:item.img !== undefined & item.img !== "" ? "rgba(0, 0, 0, 0.682)" : "black"}}>
              <h1>{item.heading}</h1>
              <h4>{item.subheading}</h4>
              <Link className='small-btns'>Explore&nbsp;&nbsp;<span class="material-symbols-outlined myicon">arrow_right_alt</span></Link>

            </div>

          </div>

        )
      })}
    </OwlCarousel>
  )
}

export default Mycarousel;