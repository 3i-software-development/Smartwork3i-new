import React,{useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const Banner = () => {
     const [active,setactive] = useState(['act','']);
  return (
    <div className={cx("banner")}>
      <div className={cx("text")}>
        <h1>HỆ ĐIỀU HÀNH DOANH NGHIỆP SMARTWORK</h1>
        <h5>Ứng dụng quản lý ,điều hành doanh nghiệp thông minh</h5>
        <p>
          Giúp doanh nghiệp quản lý các hoạt động của mình một cách hiệu quả và
          tiết kiệm thời gian. Ngoài ra, SmartWork còn cung cấp giao diện thân
          thiện và dễ sử dụng, giúp người dùng dễ dàng tương tác và thực hiện
          các tác vụ quản lí doanh nghiệp một cách nhanh chóng và chính xác.
        </p>
        <div className={cx("list-btn")}>
          <button className={cx(active[0])} onClick={()=>setactive(['act',''])}>Giới thiệu</button>
          <button className={cx(active[1])} onClick={()=>setactive(['','act'])}>Bảng giá</button>
        </div>
      </div>
      <Image
        src="/assets/images/features/feature3.png"
        alt="icon-system"
        width="500"
        height="300"
      />
    </div>
  );
};

export default Banner;
