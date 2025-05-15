import { Paper, Stack, Flex, Text } from '@mantine/core'
import React from 'react'
type MessageProps = {
  from: 'user' | 'ai';
  children: React.ReactNode;
};


export default function Message({ from, children }: MessageProps) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return (
    <Paper withBorder bg="gray.1" shadow="xs" px="md" maw="40rem" miw="16rem" py="xs" radius="lg"
      style={{
        textAlign: "left",
        backgroundColor: from === 'user' ? '#e0f7fa' : '#f0f0f0',
        borderRadius: 12,
        padding: '8px 12px',
        alignSelf: from === 'user' ? 'flex-end' : 'flex-start',
      }}>
      <Stack>
        <Flex justify="center" align="center">
          <Text size="sm" w="100%">{children}</Text>
        </Flex>
        <Text c="gray" size="xs">{hours}:{minutes}, Thu</Text>
      </Stack>

    </Paper>
  )
}


