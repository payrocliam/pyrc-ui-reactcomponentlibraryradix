import styled, { css } from "styled-components"

import { ButtonProps } from "./Button"
import colors from "../colors"
import fonts from "../fonts"

export const Button = styled.button<ButtonProps>`
  border-width: 2px;
  border-style: solid;
  border-radius: 0.375rem;
  padding: 0.5rem 1.5rem;
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;

  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          background-color: ${colors.tangerine};
          border-color: ${colors.tangerine};
          color: white;

          &:hover {
            background-color: ${colors.darkTangerine};
          }

          &:focus {
            box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%),
              0 1px 1px rgb(0 0 0 / 8%), 0 0 0 0.2rem rgb(247 119 59 / 50%);
          }
        `
      case "secondary":
        return css`
          background-color: ${colors.midnightSky};
          border-color: ${colors.midnightSky};
          color: white;

          &:hover {
            background-color: ${colors.darkNavy};
          }

          &:focus {
            box-shadow: inset 0 1px 0 rgb(0 0 0 / 15%),
              0 1px 1px rgb(0 0 0 / 8%), 0 0 0 0.2rem rgb(0 0 0 / 50%);
          }
        `
      default:
        return css`
          background-color: transparent;
          border-color: ${colors.tangerine};
          color: ${colors.tangerine};

          &:focus {
            box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%),
              0 1px 1px rgb(0 0 0 / 8%), 0 0 0 0.2rem rgb(247 119 59 / 50%);
          }
        `
    }
  }}
`
