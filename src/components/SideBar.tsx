
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { Drawer, useMantineTheme, Button, Burger, Space } from '@mantine/core';
interface SideBarProps {
    opened: boolean;
    display: string;
    setDisplay: (dis: string) => void;
    setOpened: (isOpened: boolean) => void;
}

const SideBar = ({ opened, setOpened, display, setDisplay }: SideBarProps) => {
    const theme = useMantineTheme();
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <div className={styles.gridCol1}>
            <Drawer
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="sm"
                transition="skew-up"
                transitionDuration={250}
                transitionTimingFunction="ease"
            >
                <Button variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Arrays')}>
                    Arrays
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Stacks')}>
                    Stacks
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('TwoPointers')}>
                    Two Pointers
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Trie')}>
                    Trie
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Prefix')}>
                    Prefix
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('LinkedLists')}>
                    Linked Lists
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Trees')}>
                    Trees
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Strings')}>
                    Strings
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Graphs')}>
                    Graphs
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('BFS')}>
                    BFS
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('DFS')}>
                    DFS
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('BinarySearch')}>
                    Binary Search
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Sorting')}>
                    Sorting
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('ShortestPath')}>
                    Shortest Path
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Union')}>
                    Union
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="subtle" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('BackTracking')}>
                    BackTracking
                </Button>
            </Drawer>


        </div>
    )
};

export default SideBar;
