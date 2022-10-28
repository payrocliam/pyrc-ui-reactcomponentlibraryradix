import styled, { css } from "styled-components"
import * as Tabs from "@radix-ui/react-tabs"

import { TabsListProps } from "."
import colors from "../colors"
import fonts from "../fonts"

export const TabsRoot = styled(Tabs.Root)``

export const TabsList = styled(Tabs.List)<TabsListProps>`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;

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

export const TabsTrigger = styled(Tabs.Trigger)`
  background-color: unset;
  border-color: ${colors.lightGrey};
  border-width: 0 0 4px 0;
  border-style: solid;
  color: ${colors.darkGrey};
  cursor: pointer;
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;

  &[data-state="active"] {
    border-color: ${colors.tangerine};
    color: ${colors.midnightSky};

    &:hover {
      border-color: ${colors.tangerine};
      color: ${colors.midnightSky};
    }
  }

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
          opacity: 50%;
        `
      : css`
          &:hover {
            border-color: ${colors.grey};
            color: ${colors.midnightSky};
          }
        `}
`

export const TabsContent = styled(Tabs.Content)`
  padding: 0 1rem;
`
