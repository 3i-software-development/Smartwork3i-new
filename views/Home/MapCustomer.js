import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

const cx = classNames.bind(style);

const MapCustomer = () => {
  return (
    <div className={cx('map-container')}>
        <h2>KHÁCH HÀNG</h2>
        <p>Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng trong nước và các đối tác nước ngoài</p>
        <Image src="/assets/images/3i/customer.png" width='2000' height='1000'  className={cx('mapImg')}/>
    </div>
  )
}

export default MapCustomer