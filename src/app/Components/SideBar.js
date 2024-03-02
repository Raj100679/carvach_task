import { FaSearch } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#" className={styles.link}>Dashboard</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Settings</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Notifications</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Messages</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Help</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Contact Us</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
