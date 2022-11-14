import React, { Component } from "react";
import Details from './Details'
import Image from './Image'
import Counter from "./Counter";
import ShowHides from "./ShowHides";
import Lists from "./Lists";
export default class App extends Component{
  render(){
    return(
      <div>
        {/* State
        state present enter the Component
        those data when change in component it 
        is called state.
        when state change the component is rerender
        and give new data to dom.
        state dose not change directly we need to 
        a functon is called state function. */}
    <Details 
     para="this is my first program in react"
     btn="click hare"
     />
    <Image 
     url="https://randomuser.me/portrait/women/11.jpg"
     />
     <Counter />
     <ShowHides />
     <Lists />
      </div>
    );
  }
}