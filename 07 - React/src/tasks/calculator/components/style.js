import styled from 'styled-components'

export const Button = styled.button`
   width: 3em;
   height: 3em;
   font-size: 1.5em;
   border: none;
   border-radius: 2em;
   margin: 0.3em 0.4em;
   background-color: ${props => props.backColor? props.backColor : 'white'};
   color: ${props => props.backColor? 'white' : 'blackx'};
   font-weight: bold;

   &:hover {
      cursor: pointer;
   }
`