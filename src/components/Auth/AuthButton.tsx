"use client";
import React from 'react'
import { Box, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AuthModal from './AuthModal';

export default function AuthButton() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Box>
            <Button onClick={open}>Get Started</Button>
            <AuthModal opened={opened} open={open} close={close}/>
        </Box>

    )
}
