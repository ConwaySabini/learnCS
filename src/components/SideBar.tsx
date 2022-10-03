import styles from '../../styles/Home.module.css';

interface SideBarProps {
    display: string;

}

const SideBar = ({ display, setDisplay }: SideBarProps) => {
    return (
        <div className={styles.gridCol1}>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-100 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><button>Arrays</button></li>
                        <li><button>Sliding Window</button></li>
                        <li><button>Trees</button></li>
                        <li><button>Strings</button></li>
                        <li><button>Linked Lists</button></li>
                        <li><button>Graphs</button></li>
                        <li><button>BFS</button></li>
                        <li><button>DFS</button></li>
                        <li><button>Shortest Paths</button></li>
                        <li><button>Union</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default SideBar;
