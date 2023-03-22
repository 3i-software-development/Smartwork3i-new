import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Img0 from '@/public/assets/listicon/stress1.webp'
import {ImBlocked} from 'react-icons/im'

const cx = classNames.bind(style);

const Problem = () => {
  return (
    <div className={cx("problem-container")}>
      <h2 className={cx("title")}>Những vấn đề về quản lí các doanh nghiệp thường mắc phải</h2>
      <div className={cx("div-problem")}>
        <Image src={Img0} width="1000" height={1000} alt="Stress icon" />
        <div className={cx("list-problem")}>
          <div className={cx("item-problem", "it0")}>
            <h3>
              <ImBlocked />
              Sếp khó nắm bắt được tình hình, tiến độ, hiệu quả công việc
            </h3>
            <p>
              Việc không có một hệ thống giám sát hoặc không có cách tiếp cận
              với thông tin liên tục về các dự án, công việc và tiến độ làm việc
              của nhân viên sẽ khiến cho sếp khó có thể đánh giá được hiệu quả
              của công việc.
            </p>
          </div>
          <div className={cx("item-problem", "it1")}>
            <h3>
              <ImBlocked />
              Quá nhiều giấy tờ, sổ sách, báo cáo
            </h3>
            <p>
              Nhân viên dễ dàng bị áp đảo bởi số lượng tài liệu và thông tin
              khổng lồ. Điều này không chỉ tốn thời gian mà còn làm giảm hiệu
              quả công việc và tăng chi phí cho doanh nghiệp.
            </p>
          </div>
          <div className={cx("item-problem", "it2")}>
            <h3>
              <ImBlocked />
              Khó kiểm soát thời gian làm việc của nhân viên
            </h3>
            <p>
              Khó khăn trong việc theo dõi biến động nhân sự của công ty: lao
              động tăng/ giảm, số lượng nhân sự ra/ vào công ty, đặc biệt đối
              với doanh nghiệp có nhiều địa điểm kinh doanh, có lượng nhân viên
              lớn{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
