"use client";
import React, { useState } from 'react';
import ChatInput from '@/components/Chat/ChatInput';
import ChatSidebar from '@/components/Chat/ChatSidebar';
import FileButton from '@/components/Chat/FileButton';
import Message from '@/components/Chat/Message';
import SendButton from '@/components/Chat/SendButton';
import SubjectDropdown from '@/components/Chat/SubjectDropdown';
import getPromptResponse from '@/utils/gemini';
import { Flex, Image, Stack, Text } from '@mantine/core';

type ChatMessage = {
  from: 'user' | 'ai';
  content: string;
};

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Explicitly type the new message as ChatMessage with correct literal types
    const userMessage: ChatMessage = { from: 'user', content: trimmed };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInputValue("");

    try {
      const aiResponse = await getPromptResponse(trimmed);
      const aiMessage: ChatMessage = { from: 'ai', content: aiResponse };
      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error("AI error:", error);
      const errorMessage: ChatMessage = { from: 'ai', content: "Sorry, something went wrong." };
      setMessages([...newMessages, errorMessage]);
    }
  };

  return (
    <Flex h="calc(100vh - 60px)">
      <ChatSidebar />
      <Stack p="lg" h="100%" flex={1}>
        <Flex justify="flex-end" align="center">
          <SubjectDropdown />
        </Flex>

        <Stack
          flex={1}
          align="center"
          pt="xl"
          style={{
            textAlign: "center",
            overflow: "auto",
            width: "100%",
          }}
        >
          {messages.length === 0 ? (
            <>
              <Image src="/logo_only.svg" alt="logo_chat" opacity={80} maw="10rem" c="#bdc5cd" />
              <Text size="xl" c="#bdc5cd">Welcome to AI School</Text>
              <Text size="md" c="#bdc5cd">Please type a message to begin your interaction.</Text>
            </>
          ) : (
            <Stack w="100%" flex={1}>
              {messages.map((msg, index) => (
                <Message key={index} from={msg.from}>
                  {msg.content}
                </Message>
              ))}
            </Stack>
          )}
        </Stack>

        <Flex align="center" gap="sm">
          <FileButton />
          <ChatInput value={inputValue} onChange={handleInputChange} />
          <SendButton onClick={handleSend} />
        </Flex>
      </Stack>
    </Flex>
  );
}
