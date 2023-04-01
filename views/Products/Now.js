import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import {FaAngleDoubleDown} from 'react-icons/fa';

const cx = classNames.bind(style);

const Now = ({title,data}) => {
  return (
    <div  className={cx('why-container')}>
            <FaAngleDoubleDown className={cx('icon-down')}/>
          <h2 className={cx('title')}>{title}</h2>
          <div className={cx('list-why')}>
            {data.map((d,i)=>
            <div className={cx('item-why',`item${i}`)}>
                  
             <Image src={d.img} className={cx('img-why')} alt='tác dụng smartwork' width={100} height={100}/>
            <div className={cx('text-why')}>
            <h4>{d.title}</h4>
            <p>{d.content}</p>
            </div>
           </div>
            )}
          </div>
          </div> 
  )
}

export default Now