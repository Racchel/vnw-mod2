import React, { Component } from 'react'
import imagem from './abacate.jpg'

export default class StateRender extends Component {
   
   state = {
      name: 'Racchel',
      age: '19',
      favoriteFood: 'Pão',
      music: ['A1', 'A2', 'A3']
   }
   

   render() {
      return (
         <div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.age}</h2>
            <h3>{this.state.favoriteFood}</h3>
            <ul>
               {this.state.music.map((item) => 
                  <li>{item}</li>
               )}
            </ul>
            {/* <img src={imagem} alt="Abacate" /> */}
         </div>
      )
   }
}