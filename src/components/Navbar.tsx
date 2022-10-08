
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

interface NavbarProps {
    opened: boolean;
    codeTheme: string;
    setCodeTheme: (theme: string) => void;
    setOpened: (isOpened: boolean) => void;
}

const Navbar = ({ opened, setOpened, codeTheme, setCodeTheme }: NavbarProps) => {
    const handleClick = () => {
        setOpened(!opened);
    }

    return (



        <div className="navbar bg-base-100">
            <div className="flex-none">
                <button onClick={() => handleClick()} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">LearnCS</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <a>
                            Code Theme
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a onClick={() => { setCodeTheme('dracula') }}>Dracula</a></li>
                            <li><a onClick={() => { setCodeTheme('duotoneDark') }}>Duotone Dark</a></li>
                            <li><a onClick={() => { setCodeTheme('duotoneLight') }}>Duotone Light</a></li>
                            <li><a onClick={() => { setCodeTheme('github') }}>Github</a></li>
                            <li><a onClick={() => { setCodeTheme('nightOwl') }}>Night Owl</a></li>
                            <li><a onClick={() => { setCodeTheme('nightOwlLight') }}>Night Owl Light</a></li>
                            <li><a onClick={() => { setCodeTheme('oceanicNext') }}>Oceanic Next</a></li>
                            <li><a onClick={() => { setCodeTheme('okaidia') }}>Okaidia</a></li>
                            <li><a onClick={() => { setCodeTheme('palenight') }}>Pale Night</a></li>
                            <li><a onClick={() => { setCodeTheme('shadesOfPurple') }}>Shades Of Purple</a></li>
                            <li><a onClick={() => { setCodeTheme('synthwave84') }}>Synthwave</a></li>
                            <li><a onClick={() => { setCodeTheme('ultramin') }}>Ultramin</a></li>
                            <li><a onClick={() => { setCodeTheme('vsDark') }}>VS Dark</a></li>
                            <li><a onClick={() => { setCodeTheme('vsLight') }}>VS Light</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;
