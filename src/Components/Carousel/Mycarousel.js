import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.scss';

const Mycarousel = (props) => {
  return (
    <OwlCarousel className='owl-theme' autoplay={true} loop margin={8} items={1}>
      {props.carouselData.map((item,indx) => {
        return (
          <div key={indx} class='item my-carousel-banner'>
            <img src={item.img} width={'100%'} height={'100%'} style={{objectFit:"cover"}} alt="banner" />
            <div className="black-overlay"></div>
            <h4>{item.heading}</h4>
          </div>

        )
      })}
    </OwlCarousel>
  )
}

export default Mycarousel;