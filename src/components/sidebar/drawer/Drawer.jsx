import { Drawer, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import style from '../Sidebar.module.css'

const MyDrawer = ({isClose, isOpen}) => {
    // const {
    //     token: { colorBgContainer },
    //   // eslint-disable-next-line no-undef
    //   } = theme.useToken();
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
        {
            key: 6,
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
      
  return (
    <div>

        <Drawer
        title="Каталог"
        placement={'left'}
        closable={false}
        onClose={isClose}
        open={isOpen}
        key={'left'}
      >
         <Sider className={style.sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
      </Drawer>
    </div>

  )
}

export default MyDrawer
