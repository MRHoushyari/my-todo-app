import React from "react";
import { useState } from "react";
export default function EditTaskForm({
  showEditForm,
  handleShowEditForm,
  editTaskIndex,
  tasks,
  handleUpdateTask,
}) {
  const [title, setTitle] = useState("");
  var isComplete="Incomplete";
  return (
    <>
      {showEditForm && (
        <dialog open className="modal">
          <form method="dialog">
            <p>Edit Task</p>
            <div>
              <label htmlFor="title">Title:</label>
              {/*                                                      title */}
              <input
                placeholder={tasks[editTaskIndex].title}
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
                onChange={(e) => {
                  isComplete=e.target.value;
                }}
              >
                <option>Incomplete</option>
                <option>Complete</option>
              </select>
            </div>
            <div className="close">
              {/*                                                     Update Task Button*/}
              <button
                type="button"
                className="regularButton"
                onClick={() => {
                  console.log(isComplete);
                  const updateTask = {
                    title,
                    isComplete,
                    index: editTaskIndex,
                  };
                  handleUpdateTask(updateTask);
                  handleShowEditForm(false);
                }}
              >
                Update
              </button>
              {/*                                                     Cancle Button */}
              <button
                type="button"
                className="CloseButton"
                onClick={() => {
                  handleShowEditForm(false);
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
