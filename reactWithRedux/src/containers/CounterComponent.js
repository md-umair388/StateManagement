import React, { Component } from "react";
import Button from "../components/Button";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions/index";
import "../assets/css/style.css";

class CounterComponent extends Component {
  handleBtnActionIncrement = () => {
    this.props.onIncrementClick(this.props.count);
  };

  handleBtnActionDecrement = () => {
    this.props.onDecrementClick(this.props.count);
  };

  render() {
    const { count } = this.props;
    return (
      <div className="app">
	  <div>React with redux</div>
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button action={this.handleBtnActionDecrement} buttonTitle="-" />
            <Button action={this.handleBtnActionIncrement} buttonTitle="+" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {
      dispatch(incrementCount(count));
    },
    onDecrementClick: (count) => {
      if (count !== 0) dispatch(decrementCount(count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
