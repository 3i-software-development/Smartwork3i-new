import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './style.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ListSlideHome } from '@/public/data';

const cx = classNames.bind(style);

const Slide = () => {
  return (
    <div className={cx('slide-home')}>
        <div className={cx('text-slide')}>
            <h1>Công ty TNHH 1 thành viên công nghệ và truyền thông 3i</h1>
            <p>3i được sáng lập với lý tưởng vận dụng sức sáng tạo của con người về măt công nghệ để phục vụ xã hội những sản phẩm và giải pháp mang tính trí tuệ và hiệu quả cao trong cuộc sống.</p>
        </div>
        <div className={cx('slide-home-main')}>
        <Swiper
                modules={[ Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={cx('wrapper')}
            >
                {ListSlideHome?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image className={cx('slideImg')} src={img} width='1000' height='600'/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    </div>
  )
}

export default Slide