import React from "react";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { PiCurrencyRubFill } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

import style from "./About.module.css";

const About = () => {
  let about = [
    {
      id: 0,
      title: "Консультация",
      text: "Возник вопрос ? Звоните! Наши специалисты помогут выбрать именно то, что нужно Вам.",
    },
    {
      id: 1,
      title: "Приемлемые цены",
      text: "Доступные цены и возможность приобрести товар в РАССРОЧКУ!",
    },
    {
      id: 2,
      title: "Гарантия",
      text: " Гарантийное обслуживание осуществляется Авторизованными Сервисными Центрами производителя ,«О защите прав потребителей",
    },
    {
      id: 3,
      title: "Доставка",
      text: "Бесплатная доставка по г. Ташкент 48 часов (2 дня) Доставка по P. Узбекистан 5 рабочих дней (Курьерская служба dpd)",
    },
  ];

  let aboutMap = about.map((a) => (
    <div key={a.id} className={style.box}>
      {a.id === 0 ? (
        <BiMessageRoundedDetail />
      ) : a.id === 1 ? (
        <PiCurrencyRubFill />
      ) : a.id === 2 ? (
        <FaRegStar />
      ) : (
        <CiDeliveryTruck />
      )}
      <div>
        <h1>{a.title}</h1>
        <p>{a.text}</p>
      </div>
    </div>
  ));
  return (
    <div className={style.body}>
      <div className={style.block_1}>
        <h1>Интернет магазин Бытовой техники и смартфонов</h1>
        <p>
          В нашем интернет-магазине представлен широкий ассортимент бытовой
          техники: газовые плиты, холодильники, стиральные машины, кондиционеры,
          телефоны и многие другие незаменимые товары. mediamag.uz предлагает
          своим покупателям возможность приобрести любимую бытовую технику!
          <br />
          <br />
          Новые технологии не останавливаются и каталоги нашего
          интернет-магазина с каждым днем ​​расширяются и наполняются последними
          новинками из мира лучших производителей и известных брендов. С помощью
          нашего сайта вы можете совершить любую покупку, не выходя из дома!
        </p>
      </div>
      <div className={style.block_2}>
        <h1>Наши преимущества</h1>
        <div>{aboutMap}</div>
      </div>
    </div>
  );
};

export default About;
