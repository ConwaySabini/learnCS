
import styles from '../../styles/Home.module.css';

interface SideBarProps {
    display: string;
    setDisplay: (dis: string) => void
}

const SideBar = ({ display, setDisplay }: SideBarProps) => {
    return (
        <>
            <div className={styles.gridCol1}>
                <div className="drawer-contentv mt-5">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-100 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><button onClick={() => setDisplay('Arrays')}>Arrays</button></li>
                            <li><button onClick={() => setDisplay('Queues')}>Queues</button></li>
                            <li><button onClick={() => setDisplay('Stacks')}>Stacks</button></li>
                            <li><button onClick={() => setDisplay('Two Pointers')}>Two Pointers</button></li>
                            <li><button onClick={() => setDisplay('Trie')}>Trie</button></li>
                            <li><button onClick={() => setDisplay('Prefix Sums')}>Prefix Sums</button></li>
                            <li><button onClick={() => setDisplay('Sliding Window')}>Sliding Window</button></li>
                            <li><button onClick={() => setDisplay('Trees')}>Trees</button></li>
                            <li><button onClick={() => setDisplay('Strings')}>Strings</button></li>
                            <li><button onClick={() => setDisplay('Linked Lists')}>Linked Lists</button></li>
                            <li><button onClick={() => setDisplay('Graphs')}>Graphs</button></li>
                            <li><button onClick={() => setDisplay('BFS')}>BFS</button></li>
                            <li><button onClick={() => setDisplay('DFS')}>DFS</button></li>
                            <li><button onClick={() => setDisplay('Shortest Path')}>Shortest Paths</button></li>
                            <li><button onClick={() => setDisplay('Union')}>Union</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
};

export default SideBar;
