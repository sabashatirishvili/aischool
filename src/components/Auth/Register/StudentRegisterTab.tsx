import { Button, Flex, Grid, Input, InputLabel, InputWrapper, Select, Stack, TabsPanel, Text } from '@mantine/core'
import React from 'react'

export default function ParentRegisterTab() {
    return (
        <TabsPanel value="student">
                <Stack py="lg" maw="20rem" m="auto">
                    <Stack gap="xs">
                        <InputWrapper label="სახელი" size="sm">
                            <Input></Input>
                        </InputWrapper>
                        <InputWrapper label="გვარი" size="sm">
                            <Input></Input>
                        </InputWrapper>
                        <InputWrapper label="სკოლა" size="sm">
                            <Select />
                        </InputWrapper>
                    </Stack>
                    <Button>დადასტურება</Button>
                </Stack>
        </TabsPanel>

    )
}
