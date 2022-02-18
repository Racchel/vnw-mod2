import React, { Component } from "react"
import * as S from './style.js'

export default class Button extends Component {

   state = {
      number: ''
   }
   
   inputNumber = (value) => {
      this.setState({ number: value })
      console.log(value)
   }

   render (props) {

      return (
      <S.Button bg={ props.bg } onClick={(e) => this.inputNumber(e.target.value)}>
         { props.content }
      </S.Button>
      )
   }
}