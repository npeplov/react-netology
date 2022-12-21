import React from 'react'
import ShopItem from '../ShopItem/ShopItem'

export default function ListView({items}) {
  return (
    <div>
      {items.map((item, ind) => <ShopItem item={item} />)}
    </div>
  )
}
