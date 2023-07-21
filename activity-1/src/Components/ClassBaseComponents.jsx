import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      terms: ""
    };
  }

  render() {
    const { counter, terms } = this.state;
    const everyFruit = this.props.allFruits.map(element => (
      <div key={element.id}>{element.name}</div>
    ));

    console.log(everyFruit);

    return (
      <div>
        <p>Child Component</p>
        <p>Fruit Name: {everyFruit}</p>
        <h1>Counter: {counter}</h1>
        <h1>Terms: {terms}</h1>
      </div>
    );
  }
}

export default ClassComponent;