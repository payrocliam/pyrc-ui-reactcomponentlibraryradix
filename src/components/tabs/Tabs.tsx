import React from "react"

import { Alignment } from "../../types"
import * as Styled from "./styled"

type Tab = {
  title: string
  content: React.ReactNode
  disabled?: boolean
}

export type TabsListProps = React.HTMLAttributes<HTMLElement> & {
  align: Alignment
}

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultIndex?: number
  tabs: Tab[]
  align?: Alignment
}

export const Tabs: React.FC<TabsProps> = ({
  defaultIndex,
  tabs,
  align = "start",
}) => {
  const defaultValue = tabs[defaultIndex ?? 0].title

  return (
    <Styled.TabsRoot defaultValue={defaultValue}>
      <Styled.TabsList align={align}>
        {tabs.map((tab) => (
          <Styled.TabsTrigger
            key={tab.title}
            value={tab.title}
            disabled={tab.disabled}
          >
            {tab.title}
          </Styled.TabsTrigger>
        ))}
      </Styled.TabsList>

      {tabs.map((tab) => (
        <Styled.TabsContent key={tab.title} value={tab.title}>
          {tab.content}
        </Styled.TabsContent>
      ))}
    </Styled.TabsRoot>
  )
}
