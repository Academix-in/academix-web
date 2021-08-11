import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';

function Testimonials() {
    SwiperCore.use([Autoplay]);

    return (
        <div class="testimonial-section">
            <div class="container">
                <div class="testimonial-header">
                    <h4>Testimonial</h4>
                    <h1>Our Goal is to help students achieve excellence</h1>
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
                            // when window width is >= 800px
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 50
                            },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div class="testimonial-item">
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis. Quia ipsam non molestiae omnis, modi, dolore aspernatur sunt aperiam repellendus repellat fugiat ad accusantium voluptatibus fugit commodi. Reprehenderit itaque eos placeat libero ex eius ut aut cumque atque velit?"</p>
                                <div class="testimonial-info">
                                    <img src="images/login.png" alt="" />
                                    <div class="testimonial-author">
                                        <h4>Kalpit Shah</h4>
                                        <p>Co-founder of Academix</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="testimonial-item">
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis. Quia ipsam non molestiae omnis, modi, dolore aspernatur sunt aperiam repellendus repellat fugiat ad accusantium voluptatibus fugit commodi. Reprehenderit itaque eos placeat libero ex eius ut aut cumque atque velit?"</p>
                                <div class="testimonial-info">
                                    <img src="images/login.png" alt="" />
                                    <div class="testimonial-author">
                                        <h4>Kalpit Shah</h4>
                                        <p>Co-founder of Academix</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="testimonial-item">
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis. Quia ipsam non molestiae omnis, modi, dolore aspernatur sunt aperiam repellendus repellat fugiat ad accusantium voluptatibus fugit commodi. Reprehenderit itaque eos placeat libero ex eius ut aut cumque atque velit?"</p>
                                <div class="testimonial-info">
                                    <img src="images/login.png" alt="" />
                                    <div class="testimonial-author">
                                        <h4>Kalpit Shah</h4>
                                        <p>Co-founder of Academix</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="testimonial-item">
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis. Quia ipsam non molestiae omnis, modi, dolore aspernatur sunt aperiam repellendus repellat fugiat ad accusantium voluptatibus fugit commodi. Reprehenderit itaque eos placeat libero ex eius ut aut cumque atque velit?"</p>
                                <div class="testimonial-info">
                                    <img src="images/login.png" alt="" />
                                    <div class="testimonial-author">
                                        <h4>Kalpit Shah</h4>
                                        <p>Co-founder of Academix</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
