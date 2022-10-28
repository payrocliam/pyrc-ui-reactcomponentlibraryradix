import React from "react"

import { Alignment } from "../../types"
import * as Styled from "./styled"

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  align: Alignment
}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <Styled.ButtonGroup {...props} />
}
