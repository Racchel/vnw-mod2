import React, { Component } from 'react'
import * as S from './style.js'
import Button from './components/Button.js'

export default class Calculator extends Component {
  state = {
    // paleta de cores usada
    color: ['#FF9500', '#505050', '#232020', '#eded70', 'white'],
    // numero que aparece na tela
    number: 0
  }

  inputNumber = (e) => {
    let input = this.state.number + e.target.value
    let length = input.length
    console.log(`length: ${length}`)

    // maximo 12 digitos
    if (length <= 12 ) {
      this.state.number === 0 
        // se for o primeiro digito, substitui -> não concatena
        ? this.setState({ number: e.target.value}) 
        // concatena numeros digitados para apresentar na telinha
        : this.setState({ number: input})
    } else {
      // atingindo o limite de 12 digitos, para de concatenar
      this.setState({ number: this.state.number}) 
    }
  }

  // limpa tela -> vassoura
  clear = (e) => {
    this.setState({ number: 0})
  }

  // calcula a porcentagem
  porcentage = () => {
    this.setState({ number: this.state.number/ 100 }) 
  }

  opertHandle = () => {
    if (this.state.number > 0) {
      this.setState({ number: -this.state.number }) 
      console.log(typeof this.state.number)
    }
  }

  function = () => {
    console.log('a')
  }

  render() {
  
    return (
      <div>
        <S.Container>
          <S.Wrapper>
            <S.Screen bg={this.state.color[2]}>
              <S.Number>{ this.state.number }</S.Number>
            </S.Screen>
            <S.Keyboard>
              <S.Button bg={ this.state.color[4] } onClick={ this.function }    value={'AC'}  > AC</S.Button>  
              <S.Button bg={ this.state.color[4] } onClick={ this.opertHandle } value={'+/-'} > +/-</S.Button> 
              <S.Button bg={ this.state.color[4] } onClick={ this.porcentage  } value={'%'}   > %</S.Button>   
              <S.Button bg={ this.state.color[0] } onClick={ this.function }    value={'/'}   > /</S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 7 }   > 7</S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 8 }   > 8</S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 9 }   > 9</S.Button>   
              <S.Button bg={ this.state.color[0] } onClick={ this.function }    value={'X'}   > X</S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 4 }   > 4</S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 5 }   > 5</S.Button>     
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 6 }   > 6</S.Button>     
              <S.Button bg={ this.state.color[0] } onClick={ this.function }    value={'-'}   > -</S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 1 }   > 1</S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 2 }   > 2</S.Button>        
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 3 }   > 3</S.Button>        
              <S.Button bg={ this.state.color[0] } onClick={ this.function }    value={'+'}   > + </S.Button>          
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 0 }   > 0</S.Button>   
              <S.Button bg={ this.state.color[1] } onClick={ this.function }    value={','}   > ,</S.Button> 
              <S.Button bg={ this.state.color[3] } onClick={ this.clear }       value={'🧹'}  > 🧹</S.Button>   
              <S.Button bg={ this.state.color[4] } onClick={ this.function }    value={'='}   > =</S.Button>    
            </S.Keyboard>
          </S.Wrapper>
        </S.Container>
      </div>
    )
  }
}