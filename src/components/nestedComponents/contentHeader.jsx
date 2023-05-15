import React from "react";
import AddItemForm from "./addTaskForm";
export default function ContentHeader({show, handleShow}) {
  return (
    <>
      <div className="contentHeader">
        <button
          className="regularButton"
          onClick={() => {
            handleShow(true);
          }}
        >
          Add Task
        </button>
        <select className="dropButton">
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <AddItemForm showDialogue={show} handleCancle={handleShow} />
    </>
  );
}
