import React from 'react';
import { Navbar } from '../Navbar';
import { DataTable } from '../DataTable';
import styles from '../../styles.module.css';

export const Dashboard = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={`${styles.center}`}>
                <h2>Meme Generator Dashboard</h2>
                <div><DataTable /></div>
            </div>
        </div>
    )
}
