import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   height: 98vh;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Wrapper = styled.div`
   width: 30%;
   background-color: black;
   border-radius: 1em;
   display: flex;
   justify-content: center;   
   flex-direction: column;
   align-items: center;
   padding: 4em 1em 2em 1em;
`

export const Screen = styled.div`
   width: 95%;
   height: 6em;
   background-color: ${props => props.bg? props.bg : 'white'};
   color: ${props => props.bg? 'white' : 'blackx'};
   border-radius: 1em;
   margin-bottom: 1em;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 0.5em 2.1em;
   border: 2px solid white;
`

export const Keyboard = styled.div`
   width: 95%;
   text-align: center;
`

export const Number = styled.h1`
   font-size: 2.9em;
   color: white;
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