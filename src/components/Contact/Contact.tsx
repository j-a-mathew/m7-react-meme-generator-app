import React from 'react';
import { Navbar } from '../Navbar';
import styles from '../../styles.module.css'; 

export const Contact = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={`${styles.center} ${styles.container} ${styles.offset}`}>
            Contact me wherever you found this page!
            <br/><br/>
            Or check out my Github @ <a href="https://github.com/j-a-mathew">Justin's Github</a> :)
            </div>
        </div>
    )
}
