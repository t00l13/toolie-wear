import React from 'react';
import '../WearCategory/WearCategory.css'
import { tShirtList } from '../../Utils/constants';
import shirt from '../../images/1111.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

function WearCategory(props) {
    const sliderRef = React.useRef(null);

    const handlePrev = React.useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = React.useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);
    
    return (
        <div className='wear-category'>
            <div className='wear-category__add-area'>
                <h2 className='wear-category__title'>{props.category}</h2>
                <button className='wear-category__add-button' onClick={handlePrev}></button>
            </div>
            <div className='wear-category__clothes'>
                <button className='wear-category__prev'></button>
                <Swiper className='wear-category__list'
                modules={[Navigation, Pagination, A11y]}
                ref={sliderRef}
                spaceBetween={50}
                slidesPerView={'auto'}
                centeredSlides={true}
                grabCursor={true}
                pagination={{ clickable: true,
                            dynamicBullets: true,}}
                navigation
                >
                {props.array.map((card, i) =>(
                    <SwiperSlide key={card.id} className='wear-category__card'><img className='wear-category__img' src={card.link}></img></SwiperSlide>
                ))}

                </Swiper>
                <button className='wear-category__next' onClick={handleNext}></button>
            </div>
        </div>
    );
}

export default WearCategory;