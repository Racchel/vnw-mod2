import React, { Component } from 'react'

export default class Counter extends Component {
   state = {
      counter: 0
   };
   add = () => {
      if (this.state.counter < 10) {
         this.setState({
            counter: this.state.counter + 1
         })
      }
   };

   remove = () => {
      if (this.state.counter > 0) {
         this.setState({
            counter: this.state.counter - 1
         })
      }
   };

   render() {
      return (
      <div>
         <button onClick={this.add}>+</button>
         <h1>{this.state.counter}</h1>
         <button onClick={this.remove}>-</button>
      </div>
      );
   }
}