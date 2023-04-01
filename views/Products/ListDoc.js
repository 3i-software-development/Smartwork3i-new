import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const ListDoc = () => {
  return (
    <div className={cx('listdoc')}></div>
  )
}

export default ListDoc