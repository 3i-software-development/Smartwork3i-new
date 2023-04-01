import React,{useState} from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(style);

const Linkdowload = ({img,title,Id}) => {

    const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(null);
  const [attachments, setAttachments] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    postData(
      `https://backend.smartwork.3i.com.vn/MobileLogin/GetListCmsItem?cat_id=${Id}`,
      { answer: 1 }
    )
      .then((data) => {
        setDetail(data.Object[0].full_text);
        setAttachments(data.Object[0].attachments);

      })
      .catch(function (error) {
        console.log(error);
      });


    setShow(true);
  };
  {
    attachments.length > 0 && console.log("detail", attachments[0].file_url);
  }

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
    return (
        <div className={cx('doc')} onClick={()=>handleShow()}>
            <Image src={`/assets${img}`} width="20" height="20" alt='icon-chucnang' />
            <p>{title}</p>
"
           {show &&<div className={cx('content-dowload')}>
            <div className=" row justify-content-center pb-20"></div>
            <div>
              {attachments.length > 0 &&
                attachments[0].file_type == "video" &&
                attachments.map((attachment, id) => {
                  return (
                    <>
                      <iframe
                        width="100%"
                        height="515"
                        style={{
                          borderRadius: "20px",
                          border: "1px solid",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 20px 15px",
                        }}
                        src={`${attachments[id].file_url}`}
                      
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </>
                  );
                })}
            </div>
            <div>
              {attachments.length > 0 &&
                attachments[0].file_type == ".docx" &&
                attachments.map((attachment, id) => {
                  return (
                    <Link
                      href={`https://backend.smartwork.3i.com.vn/${attachments[id].file_url}`}
                      download
                    >
                      <i
                        className="far fa-download"
                        style={{ marginRight: "10px" }}
                      ></i>
                      {`${attachment.file_name}`}
                    </Link>
                  );
                })}
            </div>
            <div
              className="row justify-content-center pb-20"
              dangerouslySetInnerHTML={{
                __html: detail,
              }}
            ></div>
          </div>}
        </div>
    )
}

export default Linkdowload