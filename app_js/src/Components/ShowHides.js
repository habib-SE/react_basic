import React, { Component } from "react";
export default class ShowHides extends Component {
  constructor() {
    super();
    this.state = {
      lable: "hide",
      status: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.status && <h1>This is a show and hide example</h1>}
        <button
          onClick={() => {
            this.setState({
              lable: "show",
              status: !this.state.status,
            });
          }}
        >
          {this.state.lable}
        </button>
      </div>
    );
  }
}
