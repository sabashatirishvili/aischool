import ActivitiyChart from '@/components/Dashboard/ActivityChart'
import UserSummary from '@/components/Dashboard/UserSummary'
import { Box, Flex, Card, Text } from '@mantine/core'
import React from 'react'

export default function Dashboard() {
  return (
    <Box p="lg">
      <Flex gap="lg">
        <ActivitiyChart />
        <UserSummary />
      </Flex>
      <Flex mt="lg" justify="space-between" align="center">
        <Card p="lg" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
        <Card p="lg" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
        <Card p="lg" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
        <Card p="lg" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
        <Card p="lg" w="300px" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
        <Card p="lg" h="200px" c="gray.7" radius="lg" bg="gray.1" withBorder>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
      </Flex>
    </Box>
  )
}
