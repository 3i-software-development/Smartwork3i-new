import React from 'react';
import classNames from 'classnames/bind';
import style from "./style.module.scss";
import {BsFillCloudUploadFill,BsFillChatSquareTextFill,BsFiletypeDocx} from 'react-icons/bs';
import {CgOrganisation} from 'react-icons/cg';
import {MdMail} from 'react-icons/md';
import {FaPhone,FaAddressBook} from 'react-icons/fa';
import {ImUpload2} from 'react-icons/im';
import Link from 'next/link';

const cx = classNames.bind(style);

const FormInfo = ({title,data}) => {
  return (
    <div className={cx('form-container-bg')} id='contact' >
    <div className={cx('form-container')} >
        <div className={cx('text-intro')}>
          <h2 className={cx('text-h2')}>  Đăng ký nhận tư vấn, yêu cầu cài đặt </h2>
          <p>{title} - Nâng tầm doanh nghiệp của bạn</p>
         {data &&  <div className={cx('list-filedoc')}>
            <p>Tài liệu hướng dẫn :</p>
               {data.map((d,i)=>
               <Link href={data} download><BsFiletypeDocx/>{d.substring(d.lastIndexOf('/') + 1)}</Link>
               )}
          </div>}
            </div>
        <form className={cx('form-main')}>
            <h6>Thông tin liên hệ</h6>
            <div className={cx('item-form','item-full')}>
                <label for='name'><CgOrganisation/> Công ty <span>*</span></label>
                <input id='name' type='text' placeholder=' --Tên công ty'/>
            </div>
            <div className={cx('item-form','item-full')}>
                <label for='company'><FaAddressBook/> Địa chỉ <span>*</span></label>
                <input id='company' type='text' placeholder=' --Địa chỉ công ty'/>
            </div>
            <div className={cx('item-form')}>
                <label for='phone'><FaPhone/> Điện thoại <span>*</span></label>
                <input id='phone' type='text' placeholder=' --Số điện thoại'/>
            </div>
            <div className={cx('item-form')}>
                <label for='mail'><MdMail/> Email <span>*</span></label>
                <input id='mail' type='text' placeholder=' --Email'/>
            </div>
            <div className={cx('item-file')}>
                <label for='file'><ImUpload2/> Upload cấu trúc công ty</label>
                <span>* Hệ thống cấu trúc phòng ban </span>
                <label for='file' className={cx('label-file')}><BsFillCloudUploadFill/>Tải lên</label>
                <input type='file' id='file'/>
                <Link  href="/assets/images/3i/file/XD.05.docx" download ><span> Tải file mẫu: XD.05.docx</span></Link>
            </div>
            <div className={cx('item-file')}>
                <label for='file'><ImUpload2/> Upload nghiệp vụ công ty</label>
                <span>* Các quy trình ,quy định hoạt động</span>
                <label for='file' className={cx('label-file')}><BsFillCloudUploadFill/>Tải lên</label>
                <input type='file' id='file'/>
                <Link  href="/assets/images/3i/file/XD.05.docx" download ><span> Tải file mẫu: XD.05.docx</span></Link>
            </div>
            <div className={cx('item-note')}>
                <label for='note'>
                    <BsFillChatSquareTextFill/>
                    Ghi chú</label>
                <textarea rows={2}/>
            </div>
            <button type='submit'>Nhận tư vấn</button>
              
        </form>
    </div>
    </div>
  )
}

export default FormInfo