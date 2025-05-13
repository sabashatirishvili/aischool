"use client";
import { Textarea } from '@mantine/core';
import { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // prevent newline
      if (value.trim() !== '') {
        onSend(value.trim());
        setValue('');
      }
    }
  };

  return (
    <Textarea
      flex={1}
      maxRows={6}
      placeholder="Type your message..."
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
