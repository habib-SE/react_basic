import React, { Component } from "react";

import axios from "axios";

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      users: [],
    };
    // this.change = this.change.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get("https://api.github.com/users");
    this.setState({
      users: data,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  // change() {
  //   this.setState({
  //     num: Math.floor(Math.random() * 100),
  //   });

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((users) => {
            return <li key={users.id}>{users.login}</li>;
          })}
        </ul>
        {/* <h1>{this.state.num}</h1>
        <button onClick={this.change}>change</button> */}
      </div>
    );
  }
}
