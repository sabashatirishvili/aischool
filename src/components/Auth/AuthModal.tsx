import { Modal, Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core'
import React from 'react'
import StudentRegisterTab from './Register/StudentRegisterTab'
import ParentRegisterTab from './Register/ParentRegisterTab'

interface AuthModalTypes {
    opened: boolean,
    close: () => void,
    open: () => void
}

export default function AuthModal({ opened, close }: AuthModalTypes) {
    return (
        <Modal opened={opened} onClose={close} title="რეგისტრაცია" size="lg">
            <Tabs defaultValue="student">
                <TabsList>
                    <TabsTab value="student">მოსწავლე</TabsTab>
                    <TabsTab value="parent">მშობელი</TabsTab>
                    <TabsTab value="school">სკოლა</TabsTab>
                </TabsList>

                <StudentRegisterTab/>
                <ParentRegisterTab/>
                <TabsPanel value="school">სკოლა</TabsPanel>
            </Tabs>
        </Modal>
    )
}
