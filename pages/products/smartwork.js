"use client";
import React from 'react';
import Banner from '@/component/Banner/Banner';
import style from "@/views/Products/style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Problem from '@/views/Products/Problem';
import Now from '@/views/Products/Now';
import List from '@/views/Products/List';
import FormInfo from '@/views/Products/FormInfo';
import { SmartworkIntro } from '@/public/data';
import Smartwork from '@/views/Home/Smartwork';

const cx = classNames.bind(style);

const SmartWork = () => {
  return (
    <div className={cx('container')}>
      <Banner title='HỆ ĐIỀU HÀNH DOANH NGHIỆP SMARTWORK' intro='Ứng dụng quản lý ,điều hành doanh nghiệp thông minh' desc=' Giúp doanh nghiệp quản lý các hoạt động của mình một cách hiệu quả và
          tiết kiệm thời gian. Ngoài ra, SmartWork còn cung cấp giao diện thân
          thiện và dễ sử dụng, giúp người dùng dễ dàng tương tác và thực hiện
          các tác vụ quản lí doanh nghiệp một cách nhanh chóng và chính xác.'
          img="/assets/images/features/feature3.png"
          btn/>
      <Problem/>
      <Now data={SmartworkIntro} title='Dùng ngay Smartwork'/>
      <FormInfo title='Smartwork'/>
      <List/>
    </div>
  )
}

export default SmartWork 