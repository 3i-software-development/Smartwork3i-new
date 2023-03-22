import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';
import Logo from '@/public/assets/images/3i/logo12.png';
import Logo2 from '@/public/assets/images/3i/logo-3i-text.png';
import Menu from './Menu';
import User from './User';
import { MenuMobile } from './Menu';


const cx = classNames.bind(style);

const Header = () => {
  return (
    <div className={cx('header')}>
      <MenuMobile/>
      <Link href='' className={cx('logo')}>
      <Image src={Logo} width='500' height='70' alt='logo-3i' className={cx('logo-3i')}/>
      </Link>
      <Link href='' className={cx('logo-icon')}>
      <Image src={Logo2} width='500' height='30' alt='logo-3i' className={cx('logo-3i')}/>
      </Link>
      <Menu/>

      <User/>
    </div>
  )
}

export default Header