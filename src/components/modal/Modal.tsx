import React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import * as Styled from "./styled"
import { ButtonGroup } from "../button-group"

export type ModalProps = React.PropsWithChildren & {
  open?: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
  buttons?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  content,
  buttons,
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose()
      }}
    >
      <Dialog.Portal>
        <Styled.DialogOverlay />

        <Styled.DialogContent>
          <Styled.DialogTitle>{title}</Styled.DialogTitle>

          {content}

          {buttons && <ButtonGroup align="end">{buttons}</ButtonGroup>}
        </Styled.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
