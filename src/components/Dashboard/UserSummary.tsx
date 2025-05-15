import { Flex, Paper, Stack } from '@mantine/core'
import React from 'react'
import Avatar from './Avatar'

export default function UserSummary() {
  return (
    <Paper flex={1} radius="xl" bg="gray.1" withBorder p="lg">
      <Stack>
        <Flex h="100%">
          <Avatar />
        </Flex>
      </Stack>
    </Paper>
  )
}
