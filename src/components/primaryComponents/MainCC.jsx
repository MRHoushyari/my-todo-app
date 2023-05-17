import AddTaskForm from "../nestedComponents/addTaskForm";
import Content from "../nestedComponents/content";
import ContentHeader from "../nestedComponents/contentHeader";
import React, { Component } from "react";

class Main extends Component {
  state = {
    show: false,
    tasks: [],
    filter: "All",
    completeTasks: [],
    incompleteTasks: [],
  };
  render() {
    return (
      <>
        <ContentHeader
          show={this.state.show}
          handleShow={this.handleShow}
          handleFilter={this.handleFilter}
        />
        <AddTaskForm
          tasks={this.state.tasks}
          show={this.state.show}
          handleNewTask={this.handleNewTask}
          handleShow={this.handleShow}
          filter={this.state.filter}
        />
        <Content
          tasks={this.state.tasks}
          // filteredTasksArray={this.filteredTasksArray}
          filter={this.state.filter}
          handleDeleteTask={this.handleDeleteTask}
          handlesStatusTask={this.handlesStatusTask}
          handleIsComplete={this.handleIsComplete}
        />
      </>
    );
  }
  handleShow = (show) => {
    this.setState({ show });
  };
  handleNewTask = (t) => {
    const newTasks = this.state.tasks.slice();
    newTasks.push(t);
    this.setState({ tasks: newTasks });
  };
  handleDeleteTask = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };
  handleIsComplete = (taskStatus, index) => {
    const newTasks = this.state.tasks.slice();
    newTasks[index].isComplete = taskStatus;
    this.setState({ tasks: newTasks });
  };
}

export default Main;
