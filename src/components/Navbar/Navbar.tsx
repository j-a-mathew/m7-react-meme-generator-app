import React from 'react';
import styles from '../../styles.module.css';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                    <li>
                        <a href="/">Home</a>{/* <Link href="/" underline="hover" color="success">Home</Link> */}
                    </li>
                    <li>
                        <a href="/signin">Sign In</a>{/* <Link href="/Contact" underline="hover" color="success">Contact</Link> */}
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>{/* <Link href="/Dashboard" underline="hover" color="success">Dashboard</Link> */}
                    </li>
                    <li>
                        <a href="/about">About</a>{/* <Link href="/About" underline="hover" color="success">About</Link> */}
                    </li>
                    <li>
                        <a href="/contact">Contact</a>{/* <Link href="/Contact" underline="hover" color="success">Contact</Link> */}
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
