"use client";
import { Textarea } from "@mantine/core";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ChatInput({ value, onChange }: ChatInputProps) {


  return (
    <Textarea
      size="md"
      radius="xl"
      placeholder="Enter a message..."
      autosize
      value={value}
      onChange={(e) => onChange(e.target.value)}
      minRows={1}
      maxRows={5}
      flex={1}
      bg="gray.0"
    />
  );
}
