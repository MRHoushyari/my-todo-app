import AddTaskForm from "../nestedComponents/addTaskForm";
import Content from "../nestedComponents/content";
import ContentHeader from "../nestedComponents/contentHeader";
import React, { Component } from "react";
import EditTaskForm from "../nestedComponents/editTaskForm";

class Main extends Component {
  state = {
    show: false,
    showEditForm: false,
    tasks: [],
    filter: "All",
    editTaskIndex: null,
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
        <EditTaskForm
          tasks={this.state.tasks}
          showEditForm={this.state.showEditForm}
          handleShowEditForm={this.handleShowEditForm}
          editTaskIndex={this.state.editTaskIndex}
          handleUpdateTask={this.handleUpdateTask}
        />
        <Content
          tasks={this.state.tasks}
          filter={this.state.filter}
          handleDeleteTask={this.handleDeleteTask}
          handlesStatusTask={this.handlesStatusTask}
          handleIsComplete={this.handleIsComplete}
          showEditForm={this.state.showEditForm}
          handleShowEditForm={this.handleShowEditForm}
          handleEditTaskIndex={this.handleEditTaskIndex}
        />
      </>
    );
  }
  handleShow = (show) => {
    this.setState({ show });
  };
  handleShowEditForm = (showEditForm) => {
    this.setState({ showEditForm });
  };
  handleEditTaskIndex = (editTaskIndex) => {
    this.setState({ editTaskIndex });
  };
  handleUpdateTask = (t) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(t.index, 1, t);
    this.setState({ tasks: newTasks });
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
