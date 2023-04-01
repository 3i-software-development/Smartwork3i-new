import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { GetListProduct } from '@/pages/api/CallAPI';
import Linkdowload from './Linkdowload';

const cx = classNames.bind(style);

const List = () => {

    const listProduct = GetListProduct();
    console.log(listProduct.data)

  return (
    <div className={cx('list-container')}>
        <h2 className={cx('title')}>Danh mục chức năng Smartwork</h2>
        <div className={cx('list-doc')}>   
            {listProduct.data?.map(d=> d.HasChild &&
    
                <div className={cx('item-doc')}>
                    <h4>{d.Title}</h4>

                    <div className={cx('list-item')}>
                    {listProduct.data.filter(a=>a.ParentId==d.Id).map((item,index)=>
                    <Linkdowload img={item.Image} title={item.Title} Id={item.Id}/>
                      // <div className={cx('doc')}>
                      //   <Image src={`/assets${item.Image}`} width="20" height="20" alt='icon-chucnang'/>
                      //   <p>{item.Title}</p>
                      // </div>
                    )}
                    </div>
                    
                </div>
              )}

          </div>
    </div>
  )
}

export default List