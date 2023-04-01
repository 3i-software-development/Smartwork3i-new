import React from 'react';
import style from "@/views/Download/style.module.scss";
import classNames from "classnames/bind";
import { ListDowload } from '@/public/data';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('container')}>
      {ListDowload.map((d,i)=>
      <div className={cx('div-container')} key={i}>
        <h2>{d.title}</h2>
        <div className={cx('list-container')}>
        {d.list.map((item,index)=>
        <div className={cx('item-download')}>
          <h4>
            <Image src={item.icon} width='20' height='20' alt='icon-item-dow'/>
            {item.title}
            </h4>
            <div className={cx('list-file')}>
              {item.file.map((items,id)=>
              <Link href={items} download >
                <Image src='/assets/listicon/pptx.png' width='20' height='20' alt='icon-pptx'/>
                {items.replace('/assets/dowload/','')}
                </Link>
              )}
            </div>
        </div>
        )}
        </div>
      </div>
      )}
    </div>
  )
}

export default index