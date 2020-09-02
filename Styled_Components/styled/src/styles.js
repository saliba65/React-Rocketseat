import styled from "styled-components";

export const Title = styled.h1`
  color: #f00;
  background: yellow;
  font-size: ${(props) => `{props.fontSize}px`} span {
    font-size: 12px;
    color: green;
  }
`;

export const TitleSmall = styled(Title)`
  color: #00f;
  font-size: 16px;
`;
