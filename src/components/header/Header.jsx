import React, { useState } from "react";
import {
  TbMapPin,
  TbPhone,
  TbMailFilled,
  TbPhoneFilled,
  TbChevronDown,
} from "react-icons/tb";
import { RiAlignLeft } from "react-icons/ri";
import { Button, Modal } from "antd";

import logo from "../../assets/logo.png";
import uz from "../../assets/uzFlag.png";
import ru from "../../assets/ruFlag.png";

import style from "./Header.module.css";

const Header = () => {
  const [modal2Open, setModal2Open] = useState(false);
  // const [sm_sidebar, setSm_sidebar] = useState(false);

  return (
    <div className={style.body}>
      <div className={style.block_1}>
        <img src={logo} alt="" />
        <h1>mediamag.uz </h1>
        <p>Elektronika va maishiy texnika onlayn-do'koni.</p>
      </div>
      <div className={style.block_2}>
        <span>
          <TbMapPin />
        </span>
        <p>Onlayn do'kon</p>
      </div>
      <div className={style.block_3}>
        <span>
          <TbPhone />
        </span>
        <div>
          <h1> +998 90 174 76 74</h1>
          <p>Пн - Пт 10:00 - 18:00</p>
        </div>
        <Button type="primary" onClick={() => setModal2Open(true)}>
          <TbMailFilled />
        </Button>
        <Modal
          title="Bizga yozing"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          width={400}
        >
          <div className={style.model}>
            <input type="text" placeholder="Ism" />
            <input type="text" placeholder="Telefon raqam*" />
            <textarea name="" id="" placeholder="Izoh" rows={7} />
          </div>
          <button className={style.btn}>Jo'natish</button>
        </Modal>
      </div>
      <div className={style.block_md}>
        <div className={style.md_padding}>
          <Button
            className={style.md_btn}
            type="primary"
            onClick={() => setModal2Open(true)}
          >
            <TbPhoneFilled /> Aloqalar <TbChevronDown />
          </Button>
        </div>
        <Modal
          title="Bizga yozing"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          width={400}
        >
          <div className={style.model}>
            <input type="text" placeholder="Ism" />
            <input type="text" placeholder="Telefon raqam*" />
            <textarea name="" id="" placeholder="Izoh" rows={7} />
          </div>
          <button className={style.btn}>Jo'natish</button>
        </Modal>
        <div className={style.lang}>
          <img src={ru} alt="" />
          <img src={uz} alt="" />
        </div>
      </div>
      <div className={style.block_sm}>
        <RiAlignLeft />
        <div style={{ cursor: "pointer" }}>
          <img src={logo} alt="" />
          <p>mediamag.uz</p>
        </div>
        <div className={style.lang}>
          <img src={ru} alt="" />
          <img src={uz} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
