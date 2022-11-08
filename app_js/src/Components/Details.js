import react, { Component } from 'react'
export default class detail extends Component{
  constructor(props){
    super(props)
  }
             render(){
              return(
                <div>
               <p>{this.props.para}</p>
               <button>{this.props.btn}
               </button>
                </div>
              );
             }
}