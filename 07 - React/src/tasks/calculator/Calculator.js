import React, { Component } from 'react'
import * as S from './style.js'

export default class Calculator extends Component {
  state = {
    color: ['#FF9500', '#505050', '#232020', '#eded70']
  }

  render() {
  
    return (
      <div>
        <S.Container>
          <S.Wrapper>
            <S.Screen backColor={this.state.color[2]}>
              <S.Number>{ this.state.number }</S.Number>
            </S.Screen>
            <S.Keyboard>
              <S.Button content='AC' />
              <S.Button content='+/-'/>  
              <S.Button content='%'  />    
              <S.Button content='/' backColor={this.state.color[0]} />    
              <S.Button content='8' backColor={this.state.color[1]} />    
              <S.Button content='7' backColor={this.state.color[1]} />    
              <S.Button content='9' backColor={this.state.color[1]} />    
              <S.Button content='X' backColor={this.state.color[0]} />   
              <S.Button content='4' backColor={this.state.color[1]} />    
              <S.Button content='5' backColor={this.state.color[1]} />    
              <S.Button content='6' backColor={this.state.color[1]} />    
              <S.Button content='-' backColor={this.state.color[0]} />    
              <S.Button content='1' backColor={this.state.color[1]} />    
              <S.Button content='2' backColor={this.state.color[1]} />    
              <S.Button content='3' backColor={this.state.color[1]} />    
              <S.Button content='+' backColor={this.state.color[0]} />    
              <S.Button content='0' backColor={this.state.color[1]} />    
              <S.Button content=',' backColor={this.state.color[1]} /> 
              <S.Button content='🧹' backColor={this.state.color[3]} />    
              <S.Button content='='  />    
            </S.Keyboard>
          </S.Wrapper>
        </S.Container>
      </div>
    )
  }
}