import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { SmartworkIntro } from '@/public/data';
import {FaAngleDoubleDown} from 'react-icons/fa';

const cx = classNames.bind(style);

const Now = () => {
  return (
    <div  className={cx('why-container')}>
            <FaAngleDoubleDown className={cx('icon-down')}/>
          <h2 className={cx('title')}>Dùng ngay Smartwork</h2>
          <div className={cx('listContent')}>
            {SmartworkIntro.map((d,i)=>
            <div className={cx('itemContainer',`item${i}`)}>
            <div  className={cx('itemContent')}>             
             <Image src={d.img} className={cx('imgContent')} alt='tác dụng smartwork' width={100} height={100}/>
            <div className={cx('textContent')}>
            <h4>{d.title}</h4>
            <p>{d.content}</p>
            </div>
           </div>
           </div>
            )}
          </div>
          </div> 
  )
}

export default Now