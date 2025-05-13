"use client";
import ChatInput from '@/components/Chat/ChatInput'
import SendButton from '@/components/Chat/SendButton';
import { Flex, Grid, GridCol, Image } from '@mantine/core'
import React from 'react'

export default function page() {
  return (
    <Grid>
      <GridCol span={2}>hi</GridCol>
      <GridCol span={9}>
        <Image src="/logo_export.svg" color="black" alt="logo"/>
        <Flex align="center">
          <ChatInput onSend={() => console.log("send")} />
          <SendButton />
        </Flex>
      </GridCol>
    </Grid>
  )
}
