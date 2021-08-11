import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';

function Recognised() {
    SwiperCore.use([Autoplay]);

    return (
        <div className="recognised-section">
            <div className="container">
                <p>Recognised By</p>

                <Swiper className="recognised-container"
                    spaceBetween={50}
                    slidesPerView={7}
                    loop="true"
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        // disableOnInteraction: true
                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        // when window width is >= 800px
                        800: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        },
                        // when window width is >= 1000px
                        1000: {
                            slidesPerView: 6,
                            spaceBetween: 50
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 60
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src="images/aicgusec.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/aiie.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/nxgventures.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/ssip.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/wf_nen.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/yahoofinance.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/yourstory.png" alt="" />
                    </SwiperSlide>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Recognised
