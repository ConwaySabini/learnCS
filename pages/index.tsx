import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SideBar from '../src/components/SideBar';
import Navbar from '../src/components/Navbar';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Modules from '../src/components/Modules';
import { createStyles, Container, Group, Anchor } from '@mantine/core';
import ultramin from 'prism-react-renderer/themes/ultramin';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import dracula from 'prism-react-renderer/themes/dracula';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import okaidia from 'prism-react-renderer/themes/okaidia';
import synthwave from 'prism-react-renderer/themes/synthwave84';
import palenight from 'prism-react-renderer/themes/palenight';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import github from 'prism-react-renderer/themes/github';

const Home: NextPage = () => {
    const [displayModule, setDisplayModule] = useState('Arrays');
    const [codeTheme, setCodeTheme] = useState('nightOwl');
    const [opened, setOpened] = useState(false);
    // contains the actual export of the code theme package
    let codeThemePackage: any;

    switch (codeTheme) {
        case 'ultramin': codeThemePackage = ultramin; break;
        case 'nightOwl': codeThemePackage = nightOwl; break;
        case 'dracula': codeThemePackage = dracula; break;
        case 'oceanicNext': codeThemePackage = oceanicNext; break;
        case 'okaidia': codeThemePackage = okaidia; break;
        case 'synthwave': codeThemePackage = synthwave; break;
        case 'palenight': codeThemePackage = palenight; break;
        case 'duotoneLight': codeThemePackage = duotoneLight; break;
        case 'duoToneDark': codeThemePackage = duotoneDark; break;
        case 'nightOwlLight': codeThemePackage = nightOwlLight; break;
        case 'shadesOfPurple': codeThemePackage = shadesOfPurple; break;
        case 'vsDark': codeThemePackage = vsDark; break;
        case 'vsLight': codeThemePackage = vsLight; break;
        case 'vsLight': codeThemePackage = github; break;
        default: codeThemePackage = nightOwl; break;
    }

    return (
        <div className={styles.container} data-theme="dark">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar opened={opened} setOpened={setOpened} codeTheme={codeTheme} setCodeTheme={setCodeTheme}></Navbar>

            <div className={styles.gridContainer}>
                <SideBar opened={opened} setOpened={setOpened} display={displayModule} setDisplay={setDisplayModule}></SideBar>

                <div className={styles.gridCol2}>
                    <div className={styles.codeGrid}>
                        <Modules codeTheme={codeThemePackage} display={displayModule}></Modules>
                    </div>
                </div>
            </div>
        </div>
    )
};




export default Home;
