import React from "react";
export default function Task({
  children,
  isComplete,
  index,
  handleIsComplete,
  handleDeleteTask,
  handleShowEditForm,
  handleEditTaskIndex,
}) {
  return (
    <li>
      <div className="left">
        <span>
          {/*                                                                Checkbox */}
          <input
            type="checkbox"
            defaultChecked={isComplete === "Complete" ? true : false}
            onClick={() => {
              if (isComplete === "Complete") {
                handleIsComplete("Incomplete", index);
              } else {
                handleIsComplete("Complete", index);
              }
            }}
          />
        </span>
        {/*                                                                   text box */}
        {isComplete === "Complete" ? (
          <text style={{ color: "Red", textDecoration: "line-through" }}>
            {children}
          </text>
        ) : (
          <text style={{ color: "Black" }}>{children}</text>
        )}
      </div>
      <div className="right">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            handleDeleteTask(index);
          }}
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            handleEditTaskIndex(index);
            handleShowEditForm(true);
          }}
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
        </svg>
      </div>
    </li>
  );
}
