import React from 'react';
//for the slider

//navigation  buttons
/*import SwiperCore, {Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
SwiperCore.use([Navigation]);*/



 const CarouselSlide = (props) => {
    const {id, slideTitle, slideDescription, slideBg} = props
  return (
        <div className = "slideWrap" style = {{backgroundImage: `url(${slideBg})`}}>
            <div className="textWrap">
              <h2>{slideTitle}</h2>
              <p>{slideDescription}</p>
              <a href="/" className="btn">Learn more</a>
            </div>
        </div>
  )
}

export default CarouselSlide
