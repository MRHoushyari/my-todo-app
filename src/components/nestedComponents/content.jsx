import React from "react";
import Task from "../DependenceComponent/Task";
export default function Content({
  tasks,
  filter,
  handleDeleteTask,
  handleIsComplete
}) {
  return (
    <div className="content">
      {tasks.length ? (
        <ul>
          {tasks.map((i, index) => {
            return (
              <Task handleIsComplete={handleIsComplete} index={index} isComplete={tasks[index].isComplete}>
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
