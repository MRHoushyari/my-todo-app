import React from "react";
import Task from "../DependenceComponent/Task";
export default function Content({
  tasks,
  filter,
  handleDeleteTask,
  handleTaskIsComplete,
}) {
  return (
    <div className="content">
      {tasks.length ? (
        <ul>
          {tasks.map((i, index) => {
            return (
              <Task
                isCpmplete={i.isCpmplete}
                handleTaskIsComplete={handleTaskIsComplete}
                index={i.index}
              >
                {i.title}
              </Task>
            );
          })}
        </ul>
      ) : (
        <span className="notodo">There is No Task To do!</span>
      )}
    </div>
  );
}
