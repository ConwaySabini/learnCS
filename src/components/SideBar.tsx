
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { Drawer, useMantineTheme, Button, Burger, Space } from '@mantine/core';
interface SideBarProps {
    display: string;
    setDisplay: (dis: string) => void
}

const SideBar = ({ display, setDisplay }: SideBarProps) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <div className={styles.gridCol1}>
            <div>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={title}
                    size="lg"
                />
            </div>
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
                <Button variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Arrays')}>
                    Arrays
                </Button>
                <br></br>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Stacks')}>
                    Stacks
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Two Pointers')}>
                    Two Pointers
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Trie')}>
                    Trie
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Prefix Sums')}>
                    Prefix Sums
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Linked Lists')}>
                    Linked Lists
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Trees')}>
                    Trees
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Strings')}>
                    Strings
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Two Pointers')}>
                    Two Pointers
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Graphs')}>
                    Graphs
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('BFS')}>
                    BFS
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('DFS')}>
                    DFS
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Binary Search')}>
                    Binary Search
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Sorting')}>
                    Sorting
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Shortest Path')}>
                    Shortest Path
                </Button>
                <Space h="sm" />
                <Button className={styles.sidebarButton} variant="outline" color="violet" radius="md"
                    size="md" onClick={() => setDisplay('Union')}>
                    Union
                </Button>
            </Drawer>

        </div>
    )
};

export default SideBar;
