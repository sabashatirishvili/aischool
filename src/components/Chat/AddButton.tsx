import { ActionIcon, Flex } from '@mantine/core'
import { FaPlus } from "react-icons/fa6";
import React from 'react'

export default function AddButton() {
  return (
    <ActionIcon radius="xl" size="xl">
      <Flex justify="center" align="center">
        <FaPlus size={20} />
      </Flex>
    </ActionIcon>
  )
}
