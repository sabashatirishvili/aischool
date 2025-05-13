import { Anchor, Button, Flex, Image, Stack, Text } from "@mantine/core";
import { FiArrowUpRight } from "react-icons/fi";
import { FaBrain, FaChartBar, FaTools } from "react-icons/fa";
import AuthButton from "@/components/Auth/AuthButton";
import { FaGear } from "react-icons/fa6";

export default function page() {
  return (
    <Flex justify="center" align="center" h="calc(100vh - 60px)">
      <Stack maw="32rem" align="center" px="lg" py="lg">
        <Image src="/logo_export.svg" alt="logo" />
        <Text pb="lg">Your AI Partner in Every Class</Text>
        <Flex gap="xs">
          <AuthButton />
          <Anchor href="/chat">
            <Button rightSection={<FiArrowUpRight />}>Try Demo</Button>
          </Anchor>
        </Flex>
        <Stack align="center" justify="center" mt="md" style={{ color: "GrayText" }} >
          <Stack gap="sm">
            <Flex align="center" gap="sm">
              <FaBrain />
              <Text>Smart Progress Insights</Text>
            </Flex>
            <Flex align="center" gap="sm">
              <FaChartBar />
              <Text>Guided Parental Support</Text>
            </Flex>
            <Flex align="center" gap="sm">
              <FaGear />
              <Text>Personalized Learning Content</Text>
            </Flex>
            <Flex align="center" gap="sm">
              <FaTools />
              <Text>Automated Teaching Tools</Text>
            </Flex>
          </Stack>
        </Stack>
        <Text>
        </Text>
      </Stack>
    </Flex>

  );
}
