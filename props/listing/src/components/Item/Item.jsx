import React from "react"
import './Item.css'

export default function Item({ item }) {
  const currencyLetter = {
    EUR: "€",
    GBP: "£",
    USD: "$",
    CAD: "C$",
  };

  const cutTitle = (title) => {
    if (title.length > 50) 
    return title.slice(0, 50) + '...'
  }

  const level = (quantity) => {
    if (quantity <= 10) return 'level-low'
    if (quantity <= 20) return 'level-medium'
    else return 'level-high'
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cutTitle(item.title)}</p>
        <p className="item-price">
          {currencyLetter[item.currency_code]}
          {item.price}
        </p>
        <p className={"item-quantity " + level(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  );
}
