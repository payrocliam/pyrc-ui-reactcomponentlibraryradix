import styled from "styled-components"

import colors from "../colors"
import fonts from "../fonts"

export const Heading1 = styled.h1`
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 4.5rem;
  margin-bottom: 1rem;
`

export const Heading2 = styled.h2`
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  margin-bottom: 1rem;
`

export const Heading3 = styled.h3`
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`

export const Heading4 = styled.h4`
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 1rem;
`

export const Heading5 = styled.h5`
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  color: ${colors.violet};
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  font-family: ${fonts.proximaNova}, ui-sans-serif, sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`
