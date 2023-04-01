import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(style);

const Introduce = ({text,img}) => {
    return (
        <div className={cx('introduce')}>
            <h2 className={cx('title')}>Giới thiệu</h2>
            <div className={cx('intro-main')}>
            <Image src={img} alt='icon-introduce' width='800' height='800'/>
            <p>{text}</p>       
            </div>
        </div>
    )
}

export default Introduce