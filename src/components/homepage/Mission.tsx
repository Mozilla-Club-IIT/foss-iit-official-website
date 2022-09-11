import React from 'react'
import styles from '../../scss/Home/Mission.module.scss'

const Mission = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>OUR MISSION</h1>
        <div className={styles.details}>
            <p className={styles.text}>Donec et diam a orci mollis hendrerit. Ut vitae justo eros. Mauris vitae sem quis eros pretium accumsan. Praesent ac turpis sit amet magna aliquam rutrum ac elementum urna. Quisque est massa, accumsan eu orci quis, ultrices semper justo. Aliquam libero nisl.</p>
        </div>
        
    </div>
  )
}

export default Mission