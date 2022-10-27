import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ButtonGroup } from "."
import { Button } from "../button"

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    align: {
      control: {
        type: "select",
        options: ["start", "center", "end"],
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button color="transparent">Close</Button>
    <Button color="primary">Submit</Button>
  </ButtonGroup>
)

export const AlignStart = Template.bind({})
AlignStart.args = {
  align: "start",
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  align: "center",
}

export const AlignEnd = Template.bind({})
AlignEnd.args = {
  align: "end",
}
