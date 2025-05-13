import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { IoMdClose } from "react-icons/io";
import React from 'react'
import { FaMessage } from "react-icons/fa6";

export default function Chat() {
  return (
    <Paper
      shadow="xs"
      py="4px"
      px="xs"
      withBorder
    >
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="md">
          <FaMessage color='#228be6' />
          <Text size="xs">Chat</Text>
        </Flex>
        <ActionIcon variant="transparent">
          <IoMdClose />
        </ActionIcon>
      </Flex>
    </Paper>
  )
}
