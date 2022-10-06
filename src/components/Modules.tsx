import styles from '../../styles/Home.module.css'
import Arrays from './Modules/Arrays/Arrays';
import Trie from './Modules/Trie/Trie';

interface ModulesProps {
    display: string;
    codeTheme: any;
}

const Modules = ({ display, codeTheme }: ModulesProps) => {
    if (display === 'Arrays')
        return (<Arrays codeTheme={codeTheme}></Arrays >)
    else if (display === 'Trie')
        return (<Trie codeTheme={codeTheme}></Trie>)
};

export default Modules;
