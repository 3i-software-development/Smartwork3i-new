import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(style);

const Diagram = ({product,img}) => {
  return (
    <div className={cx('diagram')}>
        <h2 className={cx('title')}>Sơ đồ hoạt động {product}</h2>
        <Image src={img} width='1000' height='1000'/>
    </div>
  )
}

export default Diagram