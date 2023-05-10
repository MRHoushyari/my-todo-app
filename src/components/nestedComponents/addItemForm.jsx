import React from "react";
import { useState } from "react";
import "../../styles/css/addwindow.css";
export default function AddItemForm({ items, setItems, show, setShow }) {
  const [title, setTitle] = useState();
  return (
    <>
      {show && (
        <dialog open className="modal">
          <form method="dialog">
            <p>Add TODO</p>
            <div>
              <label htmlFor="title">Title:</label>
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
              <select className="dropButton">
                <option>Incomplete</option>
                <option>Complete</option>
              </select>
            </div>
            <div className="close">
              <button
                type="button"
                className="regularButton"
                onClick={() => {
                  items.push(title);
                  setItems(items);
                  setShow(false);
                }}
              >
                Add Task
              </button>
              <button
                type="button"
                className="CloseButton"
                onClick={() => {
                  setShow(false);
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
