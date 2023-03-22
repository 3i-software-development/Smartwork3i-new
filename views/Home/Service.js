import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

const cx = classNames.bind(style);
const img = [
    "/assets/images/3i/offshore-development_2df89c44.svg",
    "/assets/images/3i/custom-development_0e355fcb.svg",
    "/assets/images/3i/outsource-development_fb2b67c4.svg",
    "/assets/images/3i/software_product_19724006.svg",
    "/assets/images/3i/web-development_4b066ac7.svg",
    "/assets/images/3i/database-migration_29dc6527.svg",
    "/assets/images/3i/app-development_638cc82b.svg",
    "/assets/images/3i/software-tesing_6fb39535.svg",
  ];

const Service = ({data}) => {
  return (
    <div className={cx('service-container')}>
        <h2>DỊCH VỤ</h2>
        <div className={cx('service-list')}>
           {data.map((item,i)=>
           <Link
           href={{
             pathname: "/services/[id]",
             query: { id: item.id },
           }} 
           className={cx('itemmainMenu')}
           key={i}
         > 
                 <Image
                   alt=""
                   src={img[i]}                   
                   height='150'
                   width='150'   
                   className={cx('service-img')}                   
                 />
                 <h5
              
                 >
                   {item.title}
                 </h5>    
         </Link>
           )}
        </div>
    </div>
  )
}

export default Service
