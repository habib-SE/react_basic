import react, { Component } from "react";
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const handelClick = () => {
      this.setState({
        count: 0,
      });
    };
    const plus = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    const minus = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    const reset = () => {
      this.setState({
        count: 0,
      });
    };
    return (
      <div>
        <p>
          <button onClick={plus}>increment</button>
          <span>{this.state.count}</span>
          <button onClick={minus}>decrement</button>
        </p>
        <button onClick={reset}>RESET</button>
      </div>
    );
  }
}
