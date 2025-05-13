"use client";
import ChatInput from '@/components/Chat/ChatInput'
import ChatSidebar from '@/components/Chat/ChatSidebar';
import FileButton from '@/components/Chat/FileButton';
import SendButton from '@/components/Chat/SendButton';
import { Box, Flex, Image, Stack, Text } from '@mantine/core'
import React from 'react'

export default function page() {
  return (
    <Flex h="calc(100vh - 60px)">
      <ChatSidebar />
      <Stack p="lg" h="100%" flex={1}>
        <Stack 
        flex={1} 
        align="center" 
        pt="xl" 
        c="#bdc5cd"
        style={{
          textAlign: "center"
        }}
        >
          <Image src="/logo_only.svg" alt="logo_chat" opacity={80} maw="10rem"  />
          <Text size="xl" >Welcome to AI School</Text>
          <Text size="md">Please type a message to begin your interaction.</Text>
        </Stack>
        <Flex align="center" gap="sm">
          <FileButton/>
          <ChatInput />
          <SendButton />
        </Flex>
      </Stack>
    </Flex>
  )
}
