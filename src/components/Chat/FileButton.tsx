'use client';
import { ActionIcon, FileButton, Flex } from '@mantine/core';
import { IoMdAttach } from 'react-icons/io';
import React, { useState } from 'react';

export default function FileUploadButton() {
  const [file, setFile] = useState<File | null>(null);
  console.log(file?.type);
  return (
    <FileButton onChange={setFile} accept="*">
      {(props) => (
        <ActionIcon
          radius="xl"
          size="xl"
          variant="outline"
          {...props}
          aria-label="Attach file"
        >
          <Flex justify="center" align="center">
            <IoMdAttach size={20} />
          </Flex>
        </ActionIcon>
      )}
    </FileButton>
  );
}
