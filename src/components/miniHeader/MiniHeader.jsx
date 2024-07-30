import React, { useState } from "react";
import { Button, Dropdown, Modal, Space } from "antd";
import { IoPersonCircleOutline } from "react-icons/io5";

import uz from "../../assets/uzFlag.png";
import ru from "../../assets/ruFlag.png";

import style from "./MiniHeader.module.css";

const MiniHeader = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Maxfiylik Siyosati
        </a>
      ),
    },
  ];

  return (
    <div className={style.body}>
      <div className={style.block_1}>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Button>Biz haqimizda</Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Button>To'lov usullari</Button>
            </Dropdown>
          </Space>
        </Space>

        <a href="/">Muddatli to'lov islomda</a>
        <a href="/">Tekshirish IMEI</a>
        <a href="/">To'lovlar uchun kafolat</a>
        <a href="/">Bepul yuk</a>
      </div>
      <div className={style.block_2}>
        <Button type="primary" onClick={() => setModal2Open(true)}>
          <IoPersonCircleOutline />
          Kirish / Ro'yxatdan o'tish
        </Button>
        <Modal
          title={` Kabinet`}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div className={style.model}>
            <input type="text" placeholder="Login" />
            <input type="text" placeholder="Parol*" />
          </div>
          <button className={style.btn}>Kirish</button>
        </Modal>
        <span>
          <img src={uz} alt="" />
          <img src={ru} alt="" />
        </span>
      </div>
    </div>
  );
};

export default MiniHeader;
