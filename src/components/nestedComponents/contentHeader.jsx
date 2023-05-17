import React from "react";
import AddItemForm from "./addTaskForm";
export default function ContentHeader({
  show,
  handleShow,
  filter,
  handleFilter,
}) {
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
        <select
          className="dropButton"
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <AddItemForm showDialogue={show} handleCancle={handleShow} />
    </>
  );
}
