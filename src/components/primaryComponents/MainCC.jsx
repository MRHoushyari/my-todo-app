import AddItemForm from "../nestedComponents/addItemForm";
import Content from "../nestedComponents/content";
import ContentHeader from "../nestedComponents/contentHeader";
import React, { Component } from "react";

class Main extends Component {
  //   constructor(props)
  //     super(props);
  state = {
    show: false,
    items: [],
  };

  render() {
    return (
      <>
        <ContentHeader show={this.state.show} />
        <AddItemForm items={this.state.items} show={this.state.show} />
        <Content items={this.items} />;
      </>
    );
  }
  handleShow = (state) => {
    this.setState({show:state})
  };
}

export default Main;
