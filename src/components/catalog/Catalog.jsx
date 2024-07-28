import React from "react";
import { PiDotsNineBold } from "react-icons/pi";

import first from "../../assets/katalog_1.png";
import second from "../../assets/katalog_2.png";
import third from "../../assets/katalog_3.png";
import fourth from "../../assets/katalog_4.png";
import fifth from "../../assets/katalog_5.png";

import style from './Catalog.module.css'

const Catalog = () => {
  let catalog = [
    { id: 0, src: first, title: "Telefonlar va gadjetlar" },
    { id: 1, src: second, title: "Maishiy texnika" },
    { id: 2, src: third, title: "Kichik maishiy texnika" },
    { id: 3, src: fourth, title: "Televizorlar" },
    { id: 4, src: fifth, title: "Kompyuter texnologiyasi" },
    { id: 5, src: fifth, title: "O'rnatilgan texnologiya" },
    { id: 6, src: fifth, title: "Uy uchun elektronika" },
    { id: 7, src: fifth, title: "Konditsionerlar" },
  ];
  let catalogMap = catalog.map((c)=>(
    <div key={c.id} className={style.box}>
    <img src={c.src} alt="" />
    <h1>{c.title}</h1>
  </div>
  ))
  return (
    <div className={style.body}>
      <div className={style.block}>
        {catalogMap}
      </div>
      <div className={style.btn}>

      <button>Katalogga o'ting <PiDotsNineBold/> </button>
      </div>
    </div>
  );
};

export default Catalog;
