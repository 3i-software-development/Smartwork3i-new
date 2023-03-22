import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import Logo from "@/public/assets/images/3i/logo12.png";
import {GoPrimitiveDot} from 'react-icons/go';
import {FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn} from 'react-icons/fa';

const cx = classNames.bind(style);

const Footer = () => {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-main")}>

        <div className={cx("infor")}>
          <Link href="" className={cx("logo")}>
            <Image
              src={Logo}
              width="500"
              height="70"
              alt="logo-3i"
              className={cx("logo-3i")}
            />
          </Link>
          <div className={cx("infor-main")}>
          <p>Gmail : info@3i.com.vn</p>
          <p>Mua hàng : (+84) 0904322883</p>
          <p>Tuyển dụng : (+84) 0904322883</p>
          <h6>HÀ NỘI (HEADQUARTER) :</h6>
          <p>Nhà B1-4 Khu đô thị Hạ Đình - Thanh Xuân - Hà Nội</p>
          <h6>HỒ CHÍ MINH :</h6>
          <p>Số 23-25 Trần Nhật Duật , Phường Tân Định , Quận 1 , Tp Hồ chí Minh</p>
          <div className={cx("list-social")}>
            <Link href='' className={cx("link-fa")}><FaFacebookF className={cx("fa-social")}/></Link>
            
            <Link href='' className={cx("link-fa")}><FaTwitter className={cx("fa-social")}/></Link>
            
            <Link href='' className={cx("link-in")}><FaLinkedinIn className={cx("in-social")}/></Link>
            
            <Link href='' className={cx("link-yt")}><FaYoutube className={cx("yt-social")}/></Link>
            
          </div>
          </div>
        </div>

        <div className={cx("list-link")}>
          <p><GoPrimitiveDot/>Trang chủ</p>
          <p><GoPrimitiveDot/>Sản phẩm</p>
          <p><GoPrimitiveDot/>Dịch vụ</p>
          <p><GoPrimitiveDot/>Tuyển dụng</p>
          <p><GoPrimitiveDot/>Công nghệ</p>
          <p><GoPrimitiveDot/>Giới thiệu</p>
          <p><GoPrimitiveDot/>Liên hệ</p>
        </div>

      </div>
      <hr></hr>
      <div className={cx("copy")}>
      © Copyright 2022 3I. All right reserved
      </div>
    </div>
  );
};

export default Footer;
