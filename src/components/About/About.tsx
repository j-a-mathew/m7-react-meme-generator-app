import React from 'react';
import { Navbar } from '../Navbar';
import styles from '../../styles.module.css';

export const About = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={`${styles.center} ${styles.container} ${styles.offset}`}>
                Hello, welcome to the Meme Generator App!
            </div>
        </div>
    )
}
