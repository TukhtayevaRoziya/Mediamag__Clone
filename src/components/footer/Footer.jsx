import React from "react";
import { TbMapPinFilled } from "react-icons/tb";

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import hit from '../../assets/hit_footer.gif'
import logo from '../../assets/darkbg_footer.png'

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
    <div className={style.body}>
      <div className={style.first_box}>
        <div className={style.block_1}>
          <h1>О нас</h1>
          <p id={style.first_p}>Политика Конфиденциальности</p>
          <h1>Проверка IMEI</h1>
        </div>
        <div className={style.block_1}>
          <h1>Способы оплаты</h1>
          <p>Оплата Перечислением</p>
          <p>Покупка в рассрочку</p>
          <h1>Гарантия на товары</h1>
        </div>
        <div className={style.block_1}>
          <h1>Рассрочка в Исламе.</h1>
          <h1>Бесплатная Доставка</h1>
        </div>
      </div>
      <div className={style.second_box}>
        <div>
          <div className={style.box}>
            <TbMapPinFilled />
            <p>Онлайн магазин</p>
          </div>
          <div className={style.box}>
            <FaPhoneAlt />
            <div>
              <a href="tel:+998901747674">+998 90 174 76 74</a>
              <p>Пн - Пт 10:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div className={style.social_media}>
          <FaFacebook/>
          <FaInstagramSquare/>
          <FaTelegram/>
        </div>
      </div>
    </div>
    <div className={style.end}>
      <p>2018 © mediamag.uz
      </p>
      <a href="https://www.liveinternet.ru/click" target="_blank" rel="noreferrer"><img src={hit} alt="" /></a>
      <a href="https://megagroup.uz/" target="_blank" rel="noreferrer">
        Powered by
        <img src={logo} alt="" />
      </a>
    </div>
    </div>

  );
};

export default Footer;
