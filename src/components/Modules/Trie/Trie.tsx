import styles from '../../../../styles/Home.module.css'
import { Tabs } from '@mantine/core';
import { Prism } from '@mantine/prism';
interface ArraysProps {
    codeTheme: any;
}

const Trie = ({ codeTheme }: ArraysProps) => {
    let code: any = `
    using namespace std;
#include <vector>
#include <string>

/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

    Trie() Initializes the trie object.
    void insert(String word) Inserts the string word into the trie.
    boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


    1 <= word.length, prefix.length <= 2000
    word and prefix consist only of lowercase English letters.
    At most 3 * 104 calls in total will be made to insert, search, and startsWith.

*/

class Node
{
public:
    bool isWord;
    Node *children[26];

    Node()
    {
        isWord = false;
        for (int i = 0; i < 26; i++)
            children[i] = nullptr;
    }
};

class Trie
{
public:
    Trie()
    {
        root = new Node();
    }

    void insert(string word)
    {
        int size = word.size();
        Node *curr = root;
        int index = 0;

        for (int i = 0; i < size; i++)
        {
            index = word[i] - 'a';

            if (!curr->children[index])
                curr->children[index] = new Node();

            curr = curr->children[index];
        }
        curr->isWord = true;
    }

    bool search(string word)
    {
        int size = word.size();
        Node *curr = root;
        int index = 0;

        for (int i = 0; i < size; i++)
        {
            index = word[i] - 'a';

            curr = curr->children[index];
            if (!curr)
                return false;
        }
        return curr->isWord;
    }

    bool startsWith(string prefix)
    {
        int size = prefix.size();
        Node *curr = root;
        int index = 0;

        for (int i = 0; i < size; i++)
        {
            index = prefix[i] - 'a';

            curr = curr->children[index];
            if (!curr)
                return false;
        }
        return true;
    }

private:
    Node *root = nullptr;
};`;

    return (
        <div className={styles.gridCol2}>
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
                        getPrismTheme={(_theme, colorScheme) =>
                            codeTheme
                        }
                    >
                        {code}
                    </Prism>
                </Tabs.Panel>
                <Tabs.Panel value="messages" pt="xs">
                    <Prism
                        withLineNumbers language="cpp"
                        copyLabel="Copy code to clipboard"
                        copiedLabel="Code copied to clipboard"
                        getPrismTheme={(_theme, colorScheme) =>
                            codeTheme
                        }
                    >
                        {code}
                    </Prism>
                </Tabs.Panel>
                <Tabs.Panel value="settings" pt="xs">
                    <Prism
                        withLineNumbers language="cpp"
                        copyLabel="Copy code to clipboard"
                        copiedLabel="Code copied to clipboard"
                        getPrismTheme={(_theme, colorScheme) =>
                            codeTheme
                        }
                    >
                        {code}
                    </Prism>
                </Tabs.Panel>
            </Tabs>
        </div >
    )
};

export default Trie;
