import React from "react";
import { SlBasket } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { notification } from "antd";

import first from "../../assets/ac_1_discount.png";
import second from "../../assets/ac_2_discount.jpg";
import third from "../../assets/ac_3_disount.png";
import fourth from "../../assets/ac_4_discount.jpg";

import style from "./Discount.module.css";

const Discount = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Добавлено в корзину!",
      duration: 2,
    });
  };

  let discount = [
    {
      id: 0,
      img: first,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "6 057 900",
    },
    {
      id: 1,
      img: second,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "6 057 900",
    },
    {
      id: 2,
      img: third,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "6 057 900",
    },
    {
      id: 3,
      img: fourth,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "6 057 900",
    },
  ];
  let discountMap = discount.map((d) => (
    <div className={style.box} key={d.id}>
      <div>
        <img src={d.img} alt="" />
      </div>
      <div className={style.box__title}>
        <h1>{d.title}</h1>
        <p>{d.company}</p>
      </div>
      <div className={style.button}>
        <div>
          <h1>
            <span>{d.price} </span> so'm
          </h1>
          <button onClick={openNotification}>
            <SlBasket />
          </button>
        </div>
        <h2>
          <FaCheck /> Есть в наличии
        </h2>
      </div>
    </div>
  ));
  return (
    <div className={style.body}>
      {contextHolder}

      <div className={style.title}>
        <span>Супер цена.</span>
      </div>
      <div className={style.main}>{discountMap}</div>
    </div>
  );
};

export default Discount;
