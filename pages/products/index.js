import React from 'react';
import Banner from '@/component/Banner/Banner';
import style from "@/views/Products/style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Problem from '@/views/Products/Problem';
import Now from '@/views/Products/Now';

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('container')}>
      <Banner/>
      <Problem/>
      <Now/>
    </div>
  )
}

export default index