import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   height: 98vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: yellow;
`


export const Wrapper = styled.div`
   width: 30%;
   height: 100%;
   background-color: black;
   border-radius: 1em;
   display: flex;
   justify-content: center;   
   flex-direction: column;
   align-items: center;
   padding: 4em 1em 2em 1em;
   position: relative;
`
export const OnOff = styled.button`
   width: 4em;
   height: 3em;
   position: absolute;
   background-color: ${props => props.isOn? 'green' : 'red'};
   top: 1em;
   left: 1.8em;
`

export const Screen = styled.div`
   width: 95%;
   height: 9em;
   background-color: ${props => props.bg? props.bg : 'white'};
   color: ${props => props.bg? 'white' : 'blackx'};
   border-radius: 1em;
   margin-bottom: 1em;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   padding: 0 2.1em;
   border: 2px solid white;
`

export const Historic = styled.p`
   font-size: 14px;
   color: white;
`
export const Number = styled.h1`
   font-size: 2.9em;
   color: white;
   margin-top: 0.5em;
`

export const Keyboard = styled.div`
   width: 95%;
   text-align: center;
`

export const Button = styled.button`
   width: 3em;
   height: 3em;
   font-size: 1.5em;
   border: none;
   border-radius: 2em;
   margin: 0.3em 0.4em;
   background-color: ${props => props.bg? props.bg : 'white'};
   color: ${props => props.bg === 'white'? 'black' : 'white'};
   font-weight: bold;

   &:hover {
      cursor: pointer;
   }
`
