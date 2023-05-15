import AddTaskForm from "../nestedComponents/addTaskForm";
import Content from "../nestedComponents/content";
import ContentHeader from "../nestedComponents/contentHeader";
import React, { Component } from "react";

class Main extends Component {
  state = {
    show: false,
    tasks: [],
    filter: "all",
  };
  render() {
    return (
      <>
        <ContentHeader show={this.state.show} handleShow={this.handleShow} />
        <AddTaskForm
          tasks={this.state.tasks}
          show={this.state.show}
          handleNewTask={this.handleNewTask}
          handleShow={this.handleShow}
        />
        <Content
          tasks={this.state.tasks}
          filter={this.state.filter}
          handleDeleteTask={this.handleDeleteTask}
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
  handleDeleteTask = () => {};
  // handleTaskIsComplete = (isComplete) => {
  //   this.setState({ isComplete });
  // };
  handleFilter = (filter) => {
    this.setState({ filter });
  };
}

export default Main;
