import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Text } from "."

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "subtitle", "paragraph"],
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: "h1",
  children: "Heading 1",
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: "h2",
  children: "Heading 2",
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: "h3",
  children: "Heading 3",
}

export const Heading4 = Template.bind({})
Heading4.args = {
  variant: "h4",
  children: "Heading 4",
}

export const Heading5 = Template.bind({})
Heading5.args = {
  variant: "h5",
  children: "Heading 5",
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  variant: "subtitle",
  children: "Subtitle",
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  variant: "paragraph",
  children: "Consectetur veniam irure do voluptate dolore officia.",
}
