import React, { Component } from 'react'
import * as S from './style.js'
import Button from './components/Button.js'

export default class Calculator extends Component {
  state = {
    // paleta de cores usada
    color: ['#FF9500', '#505050', '#232020', '#eded70', 'white'],
    // numero que aparece na tela
    number: 0,
    oldNumber: 0,
    operatorInput: '',
    result: 0,
    historic: '',
    isOn: false
  }

  inputNumber = (e) => {
    const { number } = this.state

    let input = number + e.target.value
    let length = input.length

    // maximo 12 digitos  
    if (length <= 12 ) {
      number === 0 
        // se for o primeiro digito, substitui -> não concatena
        ? this.setState({ number: e.target.value}) 
        // concatena numeros digitados para apresentar na telinha
        : this.setState({ number: input})
    } else {
      // atingindo o limite de 12 digitos, para de concatenar
      this.setState({ number: number}) 
    }
  }

  // limpa tela -> vassoura
  clear = (e) => {
    this.setState({ number: 0})
  }

  // calcula a porcentagem
  porcentage = () => {
    const { number } = this.state

    this.setState({ number: number/ 100 }) 
  }

  // inverte o sinal
  changeSing = () => {
    const { number } = this.state

    number > 0 
      ? this.setState({ number: - number }) 
      : this.setState({ number: Math.abs( number) })
  }

  // realiza o calculo 
  calculate = () => {
    const { oldNumber, number, operatorInput } = this.state
    const oldNumberN = parseFloat(oldNumber)
    const numberN = parseFloat(number)

    let resultado = 0

    if (operatorInput === '+') {
      resultado = oldNumberN + numberN 
    }
    if (operatorInput === '-') {
      resultado = oldNumberN - numberN 
    }
    if (operatorInput === 'X') {
      resultado = oldNumberN * numberN 
    }
    if (operatorInput === '/') {
      resultado = oldNumberN / numberN 
    }
    
    this.setState({ number: resultado})
    this.setState({ result: resultado})

    this.historic(resultado)
  }

  // salva no state qual operador foi selecionado
  opertHandle = (e) => {
    const { number } = this.state

    this.setState({ operatorInput:  e.target.value })
    this.setState({ oldNumber:  number })
    this.setState({ number:  0 })
  }

  // apaga o ultimo numero
  cancelEntry = () => {
    const { number } = this.state

    this.setState({ number:  number.slice(0, -1) })
  }

  // faz aparecer o historico da ultima operacao
  historic = (resultado) => {
    const { oldNumber, number, operatorInput } = this.state

    this.setState({ 
      historic: `${oldNumber} ${operatorInput} ${number} = ${resultado}` 
    })
  }

  // liga a calculadora
  turnOn = () => {
    const { isOn } = this.state

    isOn? this.setState({ isOn:  false }): this.setState({ isOn:  true })
    console.log(isOn)
  }

  // verifica se a calculadora está ligada 
   isCalculatorOn = (e) => {
    const { isOn } = this.state
    const value = e.target.value

    if (isOn) {
      if(typeof e === Number) {}

    } else {
      console.log('A calculadora está desligada! Ligue antes de usar!')
    }
    
   }

  render() {
  
    return (
      <div>
        <S.Container>
          <S.Wrapper>
            <S.OnOff isOn={ this.state.isOn } onClick={ this.turnOn } >{ this.state.isOn? 'ON' : 'OFF' } </S.OnOff>
            <S.Screen bg={ this.state.color[2] }>
              <S.Historic>{ this.state.historic }</S.Historic>
              <S.Number>{ this.state.number }</S.Number>
            </S.Screen>
            <S.Keyboard>
              <S.Button bg={ this.state.color[4] } onClick={ this.cancelEntry } value={'CE'}  > CE  </S.Button>  
              <S.Button bg={ this.state.color[4] } onClick={ this.changeSing  } value={'+/-'} > +/- </S.Button> 
              <S.Button bg={ this.state.color[4] } onClick={ this.porcentage  } value={'%'}   > %   </S.Button>   
              <S.Button bg={ this.state.color[0] } onClick={ this.opertHandle } value={'/'}   > /   </S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 7 }   > 7   </S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 8 }   > 8   </S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 9 }   > 9   </S.Button>   
              <S.Button bg={ this.state.color[0] } onClick={ this.opertHandle } value='X'     > X   </S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 4 }   > 4   </S.Button>  
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 5 }   > 5   </S.Button>     
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 6 }   > 6   </S.Button>     
              <S.Button bg={ this.state.color[0] } onClick={ this.opertHandle } value='-'     > -   </S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 1 }   > 1   </S.Button>      
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 2 }   > 2   </S.Button>        
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 3 }   > 3   </S.Button>        
              <S.Button bg={ this.state.color[0] } onClick={ this.opertHandle } value='+'     > +   </S.Button>          
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={ 0 }   > 0   </S.Button>   
              <S.Button bg={ this.state.color[1] } onClick={ this.inputNumber } value={'.'}   > ,   </S.Button> 
              <S.Button bg={ this.state.color[3] } onClick={ this.clear }       value={'🧹'}  > 🧹  </S.Button>   
              <S.Button bg={ this.state.color[4] } onClick={ this.calculate   } value='='     > =   </S.Button>    
            </S.Keyboard>
          </S.Wrapper>
        </S.Container>
      </div>
    )
  }
}