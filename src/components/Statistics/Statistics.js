import React from 'react'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({stats}) => {
    return (

        <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>
      
        <ul className={styles.statList}>
            {stats.map(stat => (          
            <li key={styles.id} className={styles.item} style={{backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(16)}`}}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>))}
        </ul>
      </section>
    )
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics