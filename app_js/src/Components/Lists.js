import React, { Component } from "react";

export default class Lists extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  render() {
    const loadData = () =>{
      fetch("https://api.github.com/users").then(json=>{
        return json.json();
       })
       .then(data=>{
        this.setState({
          list:data
        })
       })

    }
    return (
      <div>
        <ul>
          
          {this.state.list.map((m,i,) => (
            <li key={i}>{m.login} - <img src={m.avatar_url } alt={m.login} /></li>
          ))}
          
        </ul>
        <button onClick={loadData}>Fetch</button>
      </div>
    );
  }
}
