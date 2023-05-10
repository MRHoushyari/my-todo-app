import React from "react";
import AddItemForm from "./addItemForm";
export default function ContentHeader({show, setShow}) {
  return (
    <>
      <div className="contentHeader">
        <button
          className="regularButton"
          onClick={() => {
            setShow(true);
          }}
        >
          Add Task
        </button>
        <select className="dropButton">
          <option value="">All</option>
          <option value="">Incomplete</option>
          <option value="">Complete</option>
        </select>
      </div>
      <AddItemForm showDialogue={show} handleCancle={setShow} />
    </>
  );
}
