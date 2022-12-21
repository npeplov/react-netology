import React from "react";
import Item from "../Item/Item";

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        item.state !== "removed" &&
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  );
}
