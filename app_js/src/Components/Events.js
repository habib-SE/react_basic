import React, { Component } from 'react'

export default class Events extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    console.log(e)

  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}
        id="1"
        name="btn1"
        >Click 1</button>
        <button onClick={(e) => this.handleClick(e)}
        id="2"
        name="btn2"
        >Click 2</button>

      </div>
    )
  }
}
