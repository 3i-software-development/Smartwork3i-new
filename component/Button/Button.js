import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

export const Button1 = ({text}) => {
  return (
    <button className={cx('btn-green')}>{text}</button>
  )
}

export const Button2 = ({text}) => {
    return (
      <button className={cx('btn-boder-green')}>{text}</button>
    )
  }
  

