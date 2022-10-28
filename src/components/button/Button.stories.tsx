import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "."

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary", "transparent"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Submit",
  color: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Sign up",
  color: "secondary",
}

export const Transparent = Template.bind({})
Transparent.args = {
  children: "Cancel",
  color: "transparent",
}
