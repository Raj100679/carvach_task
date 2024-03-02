import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 440);
      // Reset the state if screen size is larger than 440px
      if (!isSmallScreen && showMenu) {
        setShowMenu(false);
      }
    };

    // Call handleResize initially to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu, isSmallScreen]); // Add showMenu and isSmallScreen as dependencies

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <p>
            <img src="/images.jpg" alt="Logo" className={styles.logo} />
          </p>
        </Link>
      </div>
      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div className={`${styles.icon} ${showMenu ? styles.closeIcon : styles.hamburgerIcon}`}></div>
        </div>
        {(showMenu || !isSmallScreen) && ( // Ensure links are always visible when screen is large
          <ul className={`${styles.menu} ${showMenu ? styles.menuActive : ''}`}>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
