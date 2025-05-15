import { ActionIcon, Flex } from '@mantine/core'
import { IoMdSend } from "react-icons/io";
import React from 'react'

interface PropTypes {
  onClick: () => void
}
export default function SendButton({ onClick }: PropTypes ) {
  return (
    <ActionIcon radius="xl" size="xl" onClick={onClick}>
      <Flex justify="center" align="center">
        <IoMdSend size={20} />
      </Flex>
    </ActionIcon>
  )
}
