import styled from 'styled-components'

export const Button = styled.button`
   width: 3em;
   height: 3em;
   font-size: 1.5em;
   border: none;
   border-radius: 2em;
   margin: 0.3em 0.4em;
   background-color: ${props => props.bg? props.bg : 'white'};
   color: ${props => props.bg? 'white' : 'blackx'};
   font-weight: bold;

   &:hover {
      cursor: pointer;
   }
`