import React from "react";
import Task from "../DependenceComponent/Task";
export default function Content({
  tasks,
  filter,
  handleDeleteTask,
  handleIsComplete,
  showEditForm,
  handleShowEditForm,
  handleEditTaskIndex
}) {
  const indexedTasksArray = tasks.map((t, index) => {
    return { title: t.title, isComplete: t.isComplete, index: index };
  });
  return (
    <div className="content">
      {tasks.length ? (
        <ul>
          {indexedTasksArray
            .filter((t) => {
              if (filter === "All") {
                return t;
              } else if (t.isComplete === filter) {
                return t;
              }
            })
            .map((t) => {
              return (
                <Task
                  handleIsComplete={handleIsComplete}
                  index={t.index}
                  isComplete={t.isComplete}
                  handleDeleteTask={handleDeleteTask}
                  showEditForm={showEditForm}
                  handleShowEditForm={handleShowEditForm}
                  handleEditTaskIndex={handleEditTaskIndex}
                >
                  {t.title}
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
