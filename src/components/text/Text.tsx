import React from "react"

import * as Styled from "./styled"

export type TextProps = React.PropsWithChildren & {
  variant?: "paragraph" | "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle"
}

export const Text: React.FC<TextProps> = ({ variant, children }) => {
  switch (variant) {
    case "h1":
      return <Styled.Heading1>{children}</Styled.Heading1>
    case "h2":
      return <Styled.Heading2>{children}</Styled.Heading2>
    case "h3":
      return <Styled.Heading3>{children}</Styled.Heading3>
    case "h4":
      return <Styled.Heading4>{children}</Styled.Heading4>
    case "h5":
      return <Styled.Heading5>{children}</Styled.Heading5>
    case "subtitle":
      return <Styled.Subtitle>{children}</Styled.Subtitle>
    default:
      return <Styled.Paragraph>{children}</Styled.Paragraph>
  }
}
