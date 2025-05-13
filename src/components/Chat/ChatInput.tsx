"use client";
import { Textarea } from "@mantine/core";


export default function ChatInput() {


  return (
    <Textarea 
    size="md"
    radius="xl" 
    placeholder="Enter a message..." 
    autosize
    minRows={1}
     maxRows={5}
    flex={1}
    bg="gray.0"
    />
  );
}
