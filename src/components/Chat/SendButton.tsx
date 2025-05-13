import { ActionIcon, Flex } from '@mantine/core'
import { IoMdSend } from "react-icons/io";
import React from 'react'

export default function SendButton() {
  return (
    <ActionIcon radius="xl" size="xl">
      <Flex justify="center" align="center">
        <IoMdSend size={20} />
      </Flex>
    </ActionIcon>
  )
}
