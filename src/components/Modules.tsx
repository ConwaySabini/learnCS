import styles from '../../styles/Home.module.css'
import Arrays from './Modules/Arrays/Arrays';

interface ModulesProps {
    display: string;
}

const Modules = ({ display }: ModulesProps) => {
    if (display === "Arrays")
        return (<Arrays></Arrays>)
    else
        return (<></>)
};

export default Modules;
