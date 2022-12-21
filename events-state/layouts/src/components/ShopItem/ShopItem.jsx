import React from 'react'
import './ShopItem.css'

export default function ShopItem({item}) {
  return (
    <div className='ShopItem'>
      <img src={item.img} alt="" />
      <span className='name'>{item.name}</span>
      <span className='price'>${item.price}</span>
      <span className='color'>{item.color}</span>
    </div>
  )
}
