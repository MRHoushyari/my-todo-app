import React from "react";
// import { useState } from "react";
import Item from "../DependenceComponent/item";
// import { ItemsContext } from "../Context/itemsContext";
// import { useContext } from "react";
export default function Content({ items, setItems }) {
  // const context = useContext(ItemsContext);
  // const [items, setItems] = useState([]);
  return (
    <div className="content">
      {items.length ? (
        <ul>
          {items.map((item) => {
            return <Item>{item}</Item>;
          })}
        </ul>
      ) : (
        <span>No Todo</span>
      )}
    </div>
  );
}
