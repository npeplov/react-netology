import React from 'react'
import './ShopCard.css'

export default function ShopCard({card}) {
console.log(card);
  return (
    <div className='ShopCard'>
      <span className='name'>{card.name}</span>
      <span className='price'>${card.price}</span>
      <span className='color'>{card.color}</span>
      <img src={card.img} alt="" />
    </div>
  )
}