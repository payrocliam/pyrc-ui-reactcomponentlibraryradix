import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

import fonts from "../fonts"

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
  position: fixed;
  z-index: 50;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  max-width: 1192px;
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 51;
`

export const DialogTitle = styled(Dialog.Title)`
  flex: 1;
  font-family: ${fonts.rocGrotesk}, ui-sans-serif, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  margin: 0 0 1rem 0;
`
