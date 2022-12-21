import React from 'react'
import ShopCard from '../ShopCard/ShopCard'
import './CardsView.css'

export default function CardsView({cards}) {
  return (
    <div className='CardsView'>
      {cards.map((card, ind) => <ShopCard card={card} key={ind}/>)}
    </div>
  )
}
