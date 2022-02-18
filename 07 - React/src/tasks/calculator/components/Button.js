import React, { Component } from "react"
import * as S from './style.js'

export default class Button extends Component {

   render (props) {

      return (
      <S.Button bg={ props.bg } onClick={ props.onClick } value={ props.value }>
         { props.content }
      </S.Button>
      )
   }
}