import React,{useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const Banner = ({title,intro,desc,btn,img}) => {
     const [active,setactive] = useState(['act','']);
  return (
    <div className={cx("banner")}>
      <div className={cx("text")}>
        <h1>{title}</h1>
        <h5>{intro}</h5>
        <p>
         {desc}
        </p>
       {btn && <div className={cx("list-btn")}>
          <button className={cx(active[0])} onClick={()=>setactive(['act',''])}>Giới thiệu</button>
          <button className={cx(active[1])} onClick={()=>setactive(['','act'])}>Bảng giá</button>
        </div>
        } 
      </div>
      <Image
        src={img}
        alt="icon-system"
        width="500"
        height="300"
      />
    </div>
  );
};

export default Banner;
