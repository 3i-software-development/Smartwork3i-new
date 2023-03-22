import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import style from './style.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);
const a = [
 
    "/assets/images/3i/logoSW1.png",
    "/assets/images/3i/erp-system_4f1cc94f.jpg",
    "/assets/images/3i/vai-tro-cua-erp-trong-dieu-hanh-doanh-nghiep_7333a14f.jpg",
    "/assets/images/3i/htqt_khohs_ae4350f4.png",
    "/assets/images/3i/htqlgd_31f58286.jpg",
    "/assets/images/3i/htqlpk_38233e97.png",
  ];

const Product = ({data}) => {
  return (
    <div   className={cx('product-container')}>
         <h2>SẢN PHẨM</h2>

<Swiper
          
            modules={[Autoplay]}
            grabCursor={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView="auto"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                // 900: {
                //     slidesPerView: 3,
                // },
                1150: {
                    slidesPerView: 3,
                },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    {/* <ItemInfo data={item} id={index + 1} /> */}
                    <div className={cx('item-product')}>
                          <Image src={a[index]} width='500' height='300' alt='product-3i'/>
                          <Link href={`/products/${item.id}`}>
                            {item.title}
                          </Link>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
  )
}

export default Product