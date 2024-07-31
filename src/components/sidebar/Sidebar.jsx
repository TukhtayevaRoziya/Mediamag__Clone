import React, {useEffect, useState} from "react";
import { Layout, Menu, theme } from "antd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Carousel } from "antd";

import MyDrawer from './drawer/Drawer'
import style from "./Sidebar.module.css";
import { getAction } from "../../redux/actions/readAction";
import { GET_BASKET } from "../../redux/actions/types";
import { useDispatch, useSelector } from "react-redux";

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

const Sidebar = () => {
  const dispatch = useDispatch();
  const {basket} = useSelector(state => state.basketReducer);

  useEffect(() => {
    dispatch(getAction(GET_BASKET)); // Fetch basket data on component mount
  }, [dispatch]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
          <div className={style.sm_catalog}  onClick={showDrawer}><HiOutlineMenuAlt2 /> Каталог</div>
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
            <span>{basket}</span>
          </div>
        </div>
        <div>

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
      <MyDrawer isClose={onClose} isOpen={open}/>
      </div>
    </div>
  );
};

export default Sidebar;
