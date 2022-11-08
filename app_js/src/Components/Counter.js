import react, { Component } from 'react'
export default class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count:200
    }
  }
  render(){
    const handelClick =()=>{
    this.setState({
      count:100
    })
  }
    return(
      <div>
       <h1>{this.state.count}</h1>
       <button onClick={handelClick}>Click</button>
      </div>
    )
  }
}