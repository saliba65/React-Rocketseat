import styled, { css } from "styled-components";

export default styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  /*background: ${(props) => (props.primary ? "white" : "lightblue")}; */
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `}
  color: black;
  &:hover {
    background: purple;
    color: white;
  }
`;
