import { Select } from '@mantine/core'
import React from 'react'

export default function SubjectDropdown() {
  return (
    <Select
      bg="gray.0"
      placeholder="Subject"
      data={['Mathematics', 'Georgian', 'English', 'History', 'Biology']}
    />
  )
}
