import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const About = () => {
  return (
    <div className={cx("service-container")}>
      <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
      <div className={cx("about-main")}>
      <p>
        Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia
        phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi
        đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản
        phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và
        các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.
        <br/>
        <br/>
        Hệ thống sản
        phẩm của 3i hiện nay chủ yếu về các lĩnh vực internet , truyền thông ,
        các giải pháp tối ưu hóa quy trình quản lý trong các doanh nghiệp như
        sản xuất , kinh doanh bất động sản , chứng khoán. Ngoài ra để đáp ứng
        nhu cầu ngày càng cao của thị trường, 3i cũng cung cấp đội ngũ nhân lực
        dày kinh nghiệm và năng động cho các công ty outsource và nhận gia công
        các sản phẩm thương mại điện tử, ứng dụng thông minh, hệ thống website
        bản hàng..vv
      </p>
      <Image src='/assets/images/about/cta.png' width='500' height='400' alt="3i-icon"/>
      </div>
    </div>
  );
};

export default About;
