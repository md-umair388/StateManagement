import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app">
	  <div>React</div>
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button buttonTitle={"-"} action={this.decrementCount} />
            <Button buttonTitle={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}
