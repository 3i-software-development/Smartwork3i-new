import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const Content = ({data}) => {
  return (
    <div className={cx('container')} dangerouslySetInnerHTML={{ __html: data.content }}></div>
  )
}

export default Content