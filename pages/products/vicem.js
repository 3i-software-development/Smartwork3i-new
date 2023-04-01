import React from 'react';
import Banner from '@/component/Banner/Banner';
import style from "@/views/Products/style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Introduce from '@/views/Products/Introduce';
import Now from '@/views/Products/Now';
import FormInfo from '@/views/Products/FormInfo';
import Diagram from '@/views/Products/Diagram';
import { Vicem } from '@/public/data-product';

const cx = classNames.bind(style);

const vicem = () => {
  return (
    <div className={cx('container')}>
      <Banner title={Vicem.titlebn} intro={Vicem.introbn} desc={Vicem.descbn} img={Vicem.imgbn} />
      <Introduce text={Vicem.introduce} img={Vicem.imgintro}/>
      <Now data={Vicem.func} title='Lợi ích khi dùng Vicem'/>
      <Diagram img='/assets/vicem/sodoMau.png' product='Vicem'/>
      <FormInfo title='Vicem' data={Vicem.listfile}/>
    </div>
  )
}

export default vicem