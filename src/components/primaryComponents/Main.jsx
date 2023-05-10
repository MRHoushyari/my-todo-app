import React from "react";
import AddItemForm from "../nestedComponents/addItemForm";
import Content from "../nestedComponents/content";
import ContentHeader from "../nestedComponents/contentHeader";
import { useState } from "react";
export default function Main() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <>
      <ContentHeader show={show} setShow={setShow} />
      <AddItemForm
        items={items}
        setItems={setItems}
        show={show}
        setShow={setShow}
      />
      <Content items={items} />
    </>
  );
}
