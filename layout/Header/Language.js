import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import VN from '@/public/assets/flag/VNflag.png';

const cx = classNames.bind(style);

const Language = () => {
  return (
    <div className={cx('language-container')}>
    <Image src={VN} width='40' height='20' alt='icon-flag'/>
    <span>vn</span>
    </div>
  )
}

export default Language