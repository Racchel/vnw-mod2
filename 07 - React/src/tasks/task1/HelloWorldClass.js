import React, { Component } from 'react'
import * as S from '../style'

export default class HelloWorldClass extends Component {
  render() {
    return (
      <div>
        <S.P>{this.props.message}</S.P>
      </div>
    );
  }
}

