import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "../button"
import { Modal } from "."
import { Text } from "../text"

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        buttons={
          <>
            <Button color="transparent" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
              Submit
            </Button>
          </>
        }
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: "Example Modal",
  content: (
    <Text variant="paragraph">Officia ea tempor in adipisicing cillum.</Text>
  ),
}
