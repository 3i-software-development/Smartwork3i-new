import React from 'react';
import Banner from '@/component/Banner/Banner';
import style from "@/views/Products/style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Introduce from '@/views/Products/Introduce';
import Now from '@/views/Products/Now';
import { VicemIntro } from '@/public/data';
import FormInfo from '@/views/Products/FormInfo';
import Diagram from '@/views/Products/Diagram';
import { Acb } from '@/public/data-product';

const cx = classNames.bind(style);

const acb = () => {
  return (
    <div className={cx('container')}>
      <Banner title={Acb.titlebn} intro={Acb.introbn} desc={Acb.descbn} img={Acb.imgbn}/>
      <Introduce text={Acb.introduce} img={Acb.imgintro}/>
      <Now data={Acb.func} title='Lợi ích khi dùng hệ số hóa dữ liệu ACB'/>
      <Diagram img='/assets/acb/sdACB.png' product={Acb.titlebn}/>
      <FormInfo title={Acb.titlebn} data={Acb.listfile}/>
    </div>
  )
}

export default acb