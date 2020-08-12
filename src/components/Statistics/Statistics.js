import React from 'react'
import styles from './Statistics.module.css'

const Statistics = ({stats}) => {
    return (

        <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>
      
        <ul className={styles.statList}>
            {stats.map(stat => (          
            <li className={styles.item} style={{backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(16)}`}}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>))}
        </ul>
      </section>
    )
}

export default Statistics