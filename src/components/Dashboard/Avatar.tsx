import { Paper, Stack } from '@mantine/core'
import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function Avatar() {
  return (
    <Stack h="100%" justify="center" align="center">
      <Paper p="xl" radius="100%" bg="gray.4" >
        <FaUser size={144} color="#fff" />
      </Paper>
    </Stack>
  )
}
