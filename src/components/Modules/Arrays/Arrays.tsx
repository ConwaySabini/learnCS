import styles from '../styles/Home.module.css'
import { Tabs, Center } from '@mantine/core';
import { Prism } from '@mantine/prism';

const Arrays = () => {
    let code: any = `
    int b = 4; 
int a = 5;`;

    return (
        <Tabs className="mt-5" color="grape" variant="outline" radius="md" defaultValue="gallery">
            <Tabs.List>
                <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
                <Tabs.Tab value="messages">Messages</Tabs.Tab>
                <Tabs.Tab value="settings" >Settings</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
                <Prism 
                    withLineNumbers language="cpp" 
                    copyLabel="Copy code to clipboard"
                    copiedLabel="Code copied to clipboard"
                >{code}</Prism>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
                <Prism withLineNumbers language="cpp">{code}</Prism>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
                <Prism withLineNumbers language="cpp">{code}</Prism>
            </Tabs.Panel>
        </Tabs>
    )
};

export default Arrays;
