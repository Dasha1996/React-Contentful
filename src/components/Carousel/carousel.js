
import {useContext} from 'react';
import {client} from '../../context/client';
import CarouselSlide from './CarouselSlide';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css';
import Loader from '../Loader/Loader';
import { Context } from '../../context/Context';
SwiperCore.use([Navigation]);

function Carousel  () {
    const {isCarouselLoading, carouselSlides } = useContext(Context)
    if(isCarouselLoading) {
      return <Loader/>
    }
    //slider won't move without it
   if(!Array.isArray(carouselSlides) || !carouselSlides.length) {
    return null;
   }

   console.log(carouselSlides);
  
    return (
      <div className="carousel">
      <Swiper navigation>
      {carouselSlides.map((item) => {
          const {id, slideBg, slideTitle, slideDescription} = item
          return (
            <SwiperSlide key={id}>
              <CarouselSlide  slideTitle = {slideTitle} slideDescription = {slideDescription} slideBg = {slideBg} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    );
}

export default Carousel

