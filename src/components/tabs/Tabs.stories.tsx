import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tabs } from "./Tabs"
import { Text } from "../text"

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    align: {
      options: ["start", "center", "end"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
  tabs: [
    {
      title: "Tab 1",
      content: (
        <Text>
          Do nostrud incididunt laboris pariatur minim amet magna fugiat.
        </Text>
      ),
    },
    {
      title: "Tab 2",
      content: <Text>👍</Text>,
    },
    {
      title: "Tab 3",
      content: <Text>😎</Text>,
    },
    {
      title: "Tab 4",
      disabled: true,
      content: <Text>😞</Text>,
    },
  ],
}
