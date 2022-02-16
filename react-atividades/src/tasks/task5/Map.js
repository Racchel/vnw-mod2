import React, { Component } from 'react'

export default class Map extends Component {
   
   state = {
      fruits: [
         { name: 'Abacate', color: 'Verde'},
         { name: 'Maçã', color: 'Vermelho'},
         { name: 'Mamão', color: 'Laranja'},
         { name: 'Abacaxi', color: 'Amarelo'},
         { name: 'Kiwi', color: 'Marron'},
         { name: 'Uva', color: 'Lilás'},
      ]
   }

   render() {
      return (
         <ol>
            { this.state.fruits.map((item) => 
               <li>{item.name} é {item.color}</li>
            )} 
         </ol>
      )
   }
}