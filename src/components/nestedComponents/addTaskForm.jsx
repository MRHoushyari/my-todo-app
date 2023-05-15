import React from "react";
import { useState } from "react";
export default function AddTaskForm({
  tasks,
  show,
  handleShow,
  handleNewTask,
}) {
  const [title, setTitle] = useState();
  const [isComplete, setIsComplete] = useState("Incomplete");
  return (
    <>
      {show && (
        <dialog open className="modal">
          <form method="dialog">
            <p>Add TODO</p>
            <div>
              <label htmlFor="title">Title:</label>
              {/*                                                      title */}
              <input
                type="text"
                className="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="status">
              <label htmlFor="status">Status:</label>
              {/*                                                     DropButton */}
              <select
                className="dropButton"
                onClick={(e) => {
                  setIsComplete(e.target.value);
                }}
              >
                <option>Incomplete</option>
                <option>Complete</option>
              </select>
            </div>
            <div className="close">
              {/*                                                     Add Task Button*/}
              <button
                type="button"
                className="regularButton"
                onClick={() => {
                  const newTasks = { title, isComplete };
                  handleNewTask(newTasks);
                  console.log(tasks);
                }}
              >
                Add Task
              </button>
              {/*                                                     Cancle Button */}
              <button
                type="button"
                className="CloseButton"
                onClick={() => {
                  handleShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
}
