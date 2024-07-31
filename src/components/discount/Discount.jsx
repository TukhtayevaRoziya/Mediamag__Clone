import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { Modal, notification } from "antd";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import first from "../../assets/ac_1_discount.png";
import second from "../../assets/ac_2_discount.jpg";
import third from "../../assets/ac_3_disount.png";
import fourth from "../../assets/ac_4_discount.jpg";

import style from "./Discount.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/reducers/BasketReducer";

const Discount = ({ product }) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [model, setModel] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    setModel([]);
    setCount(1);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setCount(1);
    setOpen(false);
    setModel([]);
  };
  let discount = [
    {
      id: 0,
      img: first,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "6 057 900",
      priceNum: 6057900,
    },
    {
      id: 1,
      img: second,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "7 057 900",
      priceNum: 7057900,
    },
    {
      id: 2,
      img: third,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "9 057 900",
      priceNum: 9057900,
    },
    {
      id: 3,
      img: fourth,
      title: "Холодильник ARTEL HD 360 FWEN Inverter (Стальной)",
      company: "Artel",
      price: "8 057 900",
      priceNum: 8057900,
    },
  ];
  const openNotification = (d) => {
    dispatch(addToBasket());
    setModel({
      img: d.img,
      title: d.title,
      price: d.price,
      priceNum: d.priceNum,
    });
    api.open({
      message: "Добавлено в корзину!",
      duration: 2,
    });
    setOpen(true);
  };

  let discountMap = discount.map((d) => {
    return (
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
            <button onClick={() => openNotification(d)}>
              <SlBasket />
            </button>
          </div>
          <h2>
            <FaCheck /> Есть в наличии
          </h2>
          <Modal
            title=""
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <div className={style.buy_model}>
              <div className={style.buy_header}>
                <img src={model.img} alt="" />
                <h1 className={style.buy_title}>{model.title}</h1>
              </div>
              <div className={style.buy_price}>
                <h1>Цена, сўм: {model.price} </h1>
                <h1>Сумма: {model.priceNum * count} </h1>
              </div>
              <div className={style.buy_btn}>
                <div>
                  <span
                  style={{color: count == 0 ? 'grey' : '#e13439'}}
                    onClick={() => {
                      count != 0 && setCount(count - 1);
                    }}
                  >
                    <CiCircleMinus />
                  </span>
                  <p>{count}</p>
                  <span
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <CiCirclePlus />{" "}
                  </span>
                </div>

                <button>Купить без регистрации</button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  });
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
