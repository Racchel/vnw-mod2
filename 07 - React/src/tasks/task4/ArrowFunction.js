import React, { Component } from 'react'

export default class ArrowFunction extends Component {
   
   sendMessage = (message) => {
      return <p>{message}</p>
   }

   doubleNumber = (number) => {
      return <p>O dobro de {number} é: {number * 2}</p>
   }

   render() {
      return (
         <div>
            { this.sendMessage('Essa é uma arrow function') } 
            { this.doubleNumber(2) }
         </div>
      )
   }
}