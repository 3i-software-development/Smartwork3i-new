import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Link from 'next/link';
import {FaCloudDownloadAlt} from 'react-icons/fa';

const cx = classNames.bind(style);

const Dowload = () => {
  return (
    <div className={cx('dow-container')}>
        <Link href='/download' title='Bộ cài'>
          <FaCloudDownloadAlt className={cx('icon2')}/>
        Dowload tài liệu
        </Link>
    </div>
  )
}

export default Dowload