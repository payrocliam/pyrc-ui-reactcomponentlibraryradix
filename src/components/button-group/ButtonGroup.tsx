import React from "react"

import * as Styled from "./styled"

export type ButtonGroupAlignment = "start" | "center" | "end"

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  align: ButtonGroupAlignment
}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <Styled.ButtonGroup {...props} />
}
