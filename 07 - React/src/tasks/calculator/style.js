import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 510px;
  background-color: black;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4em 1em 2em 1em;
  position: relative;
  bottom: 0;
`;
export const OnOff = styled.button`
  width: 4em;
  height: 1.8em;
  position: absolute;
  background-color: ${(props) => (props.isOn ? "#10b710" : "#e53636")};
  border: none;
  border-radius: 0.5em;
  font-weight: bold;
  top: 1em;
  left: 1.8em;
  font-size: 0.8em;
`;

export const Screen = styled.div`
  width: 70%;
  height: 7.8em;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.bg ? "white" : "black")};
  border-radius: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2.1em;
  border: 2px solid white;
`;

export const Historic = styled.p`
  font-size: 14px;
  color: white;
  margin-top: 2.5em;
`;
export const Number = styled.h1`
  font-size: 2.7em;
  color: white;
  margin-top: 0.5em;
`;

export const Keyboard = styled.div`
  width: 95%;
  text-align: center;
`;

export const Button = styled.button`
  width: 2.8em;
  height: 2.8em;
  font-size: 1.5em;
  border: none;
  outline: none;
  border-radius: 2em;
  margin: 0.3em 0.4em;
  background-color: ${(props) => (props.bg[0] ? props.bg[0] : "white")};
  color: ${(props) => (props.bg === "white" ? "black" : "white")};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.bg[0] ? props.bg[1] : "white")};
  }
`;
