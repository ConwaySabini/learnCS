import styles from '../styles/Home.module.css'
import { Center } from '@mantine/core';
import { Tabs } from '@mantine/core';

const Arrays = () => {
    return (
        <Tabs className="mt-5" color="grape" variant="outline" radius="md" defaultValue="gallery">
            <Tabs.List>
                <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
                <Tabs.Tab value="messages">Messages</Tabs.Tab>
                <Tabs.Tab value="settings" >Settings</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
                Gallery tab content
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
                Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
                Settings tab content
            </Tabs.Panel>
        </Tabs>
    )
};

export default Arrays;
