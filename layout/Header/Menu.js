import React, { useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import style from "./style.module.scss";
import { ListMenu } from "@/public/data";
import Link from "next/link";
import DownIcon from '@/public/assets/listicon/down.png'

const cx = classNames.bind(style);

const Menu = () => {
  return (
    <div className={cx("menu-container")}>
      {ListMenu.map((d, i) =>
        d.children.length > 0 ? (
          <div className={cx("dropdown")} key={i}>
            <div className={cx("menuHeader")}>
              {d.title}
              <Image src={DownIcon} alt='down' width='10' height='10' className={cx('icon-down')}/>
            </div>
            <div className={cx("menu-hover")}>
              {d.children.map((item, index) => (
                <Link
                  href={`/${d.to}/${item.id}`}
                  className={cx("textLink")}
                  key={index}
                >
                  <p>
                    <Image
                                            alt={item.title}
                                            src={item.img}
                                            width='20'
                                            height='20'                     
                                        />
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link href={`/${d.to}`} className={cx("dropdown")}>
            {d.title}
          </Link>
        )
      )}
      <span className={cx("triangle")}></span>
    </div>
  );
};

export default Menu;

export const MenuMobile = () => {
  const [show, setshow] = useState('');
  const [actMobile, setactMobile] = useState(0);
  const showMenu = (i) => {
    setactMobile(
      actMobile == i ? -1 : i
    );
  };

  return (
    <div className={cx("mb-container")}>
      <div className={cx("mb-icon")} onClick={() => setshow(show==''?'act':'')}>
        <div/>
        <div/>
        <div/>
        </div> 
     
        <div className={cx("menu-mb-container",show)}>
          {ListMenu.map((d, i) =>
            d.children.length > 0 ? (
              <div className={cx("dropdown-mb")} key={i}>
                <div
                  className={cx("menuHeader-mb")}
                  onClick={() => showMenu(i)}
                >
                  {d.title}
                  <Image src={DownIcon} alt='down' width='10' height='10' className={cx('icon-down')}/>
                </div>
                {actMobile == i ? (
                  <div className={cx("menu-hover-mb")}>
                    {d.children.map((item, index) => (
                      <Link
                        href={`/${d.to}/${item.id}`}
                        className={cx("textLink")}
                        key={index}
                      >
                        <p>
                          <Image
                                            alt={item.title}
                                            src={item.img}
                                            width='20'
                                            height='20'                     
                                        />
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <Link href={`/${d.to}`} className={cx("dropdown-mb")}>
                {d.title}
              </Link>
            )
          )}
        </div>
      
    </div>
  );
};
