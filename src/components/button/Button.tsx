import React, { forwardRef } from "react"

import * as Styled from "./styled"

type ButtonColors = "primary" | "secondary" | "transparent"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColors
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    props: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) {
    return <Styled.Button {...props} ref={ref} />
  }
)
