import { Flex, Stack } from '@mantine/core'
import React from 'react'
import Chat from './Chat'
import AddButton from './AddButton'

export default function ChatSidebar() {
  return (
    <Stack
      bg="gray.1"
      h="full"
      w="calc(100% / 6)"
      py="sm"
      px="md"
      style={{
        borderRight: "1px solid #dee2e6"
      }}
    >
      <Stack w="100%" gap="xs">
        <Chat />
        <Chat />
        <Chat />
      </Stack>
      <Flex flex={1} justify="flex-end" align="flex-end">
        <AddButton />
      </Flex>
    </Stack>
  )
}
