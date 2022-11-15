import React from 'react';
import styles from '../../styles.module.css';
import { Navbar } from '../Navbar';

interface Props {
    title: string;
}

export const Home = ( props: Props ) => {
    return (
        <>
        <Navbar />
        <div className={styles.background}>
            <div className={`${styles.center} ${styles.container}`}>
                <h1 className={styles.mainText}>{props.title}</h1>
                <div className={styles.logo}></div>
            </div>
        </div>
        </>
    )
}
