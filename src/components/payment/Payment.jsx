import React from 'react'

import payme from '../../assets/payme.png'
import click from '../../assets/click.jpg'
import paymo from '../../assets/paymo.png'
import alif from '../../assets/alif.jpg'

import style from './Payment.module.css'

const Payment = () => {
  return (
    <div className={style.body}>
      <h1>Способ оплаты
      </h1>
      <div className={style.images}>
        <img src={payme} alt="" />
        <img src={click} alt="" />
        <img src={paymo} alt="" />
        <img src={alif} alt="" />
      </div>
    </div>
  )
}

export default Payment
