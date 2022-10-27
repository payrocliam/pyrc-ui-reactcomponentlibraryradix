import styled, { css } from "styled-components"

import { ButtonGroupProps } from "./ButtonGroup"

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;

  ${(props) => {
    switch (props.align) {
      case "start":
        return css`
          justify-content: flex-start;
        `
      case "end":
        return css`
          justify-content: flex-end;
        `
      default:
        return css`
          justify-content: center;
        `
    }
  }}
`
