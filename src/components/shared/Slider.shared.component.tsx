import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import type { ReactNode } from 'react';
import "../../styles/components/utility.css";


interface SliderPropTypes{
    elements:ReactNode[];
    slidesPerView?:number;
    background?:string;
};

function Slider({elements, slidesPerView=1, background}:SliderPropTypes) {
    
    return(

        <Swiper
            slidesPerView={slidesPerView}
            loop
            pagination={{clickable:true}}
            navigation
            modules={[Pagination, Navigation, Autoplay]}
            style={{
                ...(background&&{background})
            }}
        >
            {
                elements.map((element, index) => (
                    <SwiperSlide key={index}>
                        {element}
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default Slider;