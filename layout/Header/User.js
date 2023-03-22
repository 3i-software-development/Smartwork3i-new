import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
import { Button1, Button2 } from "@/component/Button/Button";
import Language from "./Language";
import {BiUser} from 'react-icons/bi';

const cx = classNames.bind(style);

const User = () => {
  return (
    <div className={cx("user-container")}>
      <Language />
      <div className={cx("user-menu")}>

      <Link href='/sign-up' className={cx('link-user')}><Button1 text="Đăng kí" /></Link>
      <Link href='/log-in' className={cx('link-user')}><Button2 text="Đăng nhập" /></Link>

      <BiUser className={cx("user-menu-icon")}/>
      <div className={cx("user-menu-hover")}>
        <Link href='/sign-up'>Đăng kí</Link>
        <Link href='/log-in'>Đăng nhập</Link>
      </div>
      </div>

      
      
    </div>
  );
};

export default User;
