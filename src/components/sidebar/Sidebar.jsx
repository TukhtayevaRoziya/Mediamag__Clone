import React from "react";
import { Layout, Menu, theme } from "antd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Carousel } from "antd";

import style from "./Sidebar.module.css";

const { Sider } = Layout;

const sidebar = [
  {
    key: 0,
    label: "Телефоны и гаджеты",
    children: [
      {
        label: "Смартфоны",
      },
      { label: "Планшеты" },
      { label: "Смарт часы" },
      { label: "Аксессуары" },
      { label: "Наушники" },
    ],
  },
  {
    key: 1,
    label: "Техника для дома",
    children: [
      {
        label: "Холодильники",
      },
      { label: "Газовые и электро плиты" },
      { label: "Стиральные машины" },
      { label: "Пылесосы" },
      { label: "Микроволновые печи" },
    ],
  },
  {
    key: 2,
    label: "Малая бытовая техника",
    children: [
      {
        label: "Электрочайники",
      },
      { label: "Соковыжималки" },
      { label: "Мультиварки" },
      { label: "Тостерницы и сендвичницы" },
      { label: "Блендеры" },
    ],
  },
  {
    key: 3,
    label: "Телевизоры",
    children: [
      {
        label: "Компьютерная техника",
      },
      { label: "Ноутбуки" },
      { label: "Персональные компьютеры" },
      { label: "Принтеры" },
      { label: "Комплектующие и аксессуары" },
    ],
  },
  {
    key: 4,
    label: "Компьютерная техника",
    children: [
      {
        label: "Компьютерная техника",
      },
      { label: "Ноутбуки" },
      { label: "Персональные компьютеры" },
      { label: "Принтеры" },
      { label: "Комплектующие и аксессуары" },
    ],
  },
  {
    key: 5,
    label: "Встраиваемая техника",
    children: [
      {
        label: "Встраиваемые духовые шкафы",
      },
      { label: "Встраиваемые варочные поверхности" },
      { label: "Встраиваемые холодильники" },
    ],
  },
];
const items2 = sidebar.map((s, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    label: s.label,

    children: !s.children
      ? null
      : s.children.map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: _.label,
          };
        }),
  };
});
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className={style.body}>
      <div className={style.sidebar}>
        <h1>
          <HiOutlineMenuAlt2 /> Каталог
        </h1>

        <Sider className={style.sider} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
      </div>
      <div className={style.main}>
        <div className={style.main_header}>
          <div className={style.search}>
            <input type="text" placeholder="Поиск..." />
            <IoSearch />
            <span>
              <FaFilter />
            </span>
          </div>
          <div className={style.basket}>
            <SlBasket />
            <h1>Корзина</h1>
            <span>0</span>
          </div>
        </div>
        <Carousel arrows className={style.carousel} infinite={true}>
          <div className={style.box} id={style.first}>
            <div>
              <p>Наши специалисты помогут выбрать именно то, что нужно Вам.</p>
              <h1>Возник вопрос ? Звоните!</h1>
            </div>
          </div>
          <div className={style.box} id={style.second}>
            <div>
              <p>Отвечает: Шайх Муҳаммад Содиқ Муҳаммад Юсуф</p>
              <h1>Допускается ли рассрочка в Шариате?</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Sidebar;
