import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import {FaChartBar} from 'react-icons/fa';

const cx = classNames.bind(style);

const Smartwork = () => {
  return (
    <div className={cx('sw-container')}>
        <div className={cx('sw-text')}>
            <h3>Khám phá ngay sức mạnh của Smartwork - phần mềm quản lí doanh nghiệp thông minh và toàn diện</h3>
            <p>Giúp doanh nghiệp quản lý các hoạt động của mình một cách hiệu quả và tiết kiệm thời gian. Ngoài ra, SmartWork còn cung cấp giao diện thân thiện và dễ sử dụng, giúp người dùng dễ dàng tương tác và thực hiện các tác vụ quản lí doanh nghiệp một cách nhanh chóng và chính xác.</p>
            <div className={cx('list-btn')}>
            <Link href='/products'><button>Tìm hiểu ngay</button></Link>
            <Link href='/products#contact'><button>Nhận tư vấn</button></Link>
            </div>
        </div>
        <FaChartBar/>
    </div>
  )
}

export default Smartwork