import React from "react";

import first from "../../assets/ac_1_discount.png";

import style from "./Discount.module.css";

const Discount = () => {
  return (
    <div className={style.body}>
      <div className={style.title}>
        <span>Супер цена.</span>
      </div>
      <div>
            <div>
                <img src={first} alt="" />
            </div>
            <div>
    <h1>Холодильник ARTEL HD 360 FWEN Inverter (Стальной)</h1>
    <p>Artel</p>
            </div>
            <div>
                <div>

                <h1>6 057 900 so'm</h1>
                <button>buy</button>
                </div>
                <h2>Есть в наличии</h2>
            </div>
        </div>
    </div>
  );
};

export default Discount;
