import React from "react";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  

  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}

    &:hover {
        s
    }
`;

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox {isBlack && $isBlack}></StyledBox>;
}
