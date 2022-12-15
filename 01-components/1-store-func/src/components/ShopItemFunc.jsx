import React from "react";

const ShopItemFunc = (props) => {
  
  return (
    <div className="main-content">
      <h2>{props.item.brand}</h2>
      <h1>{props.item.title}</h1>
      <h3>{props.item.description}</h3>
      <div className="description">
        {props.item.descriptionFull}
      </div>
      <div className="highlihgt-windows mobile">
        <div className="highlihgt-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{props.item.currency}{props.item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )  
}

export default ShopItemFunc;
