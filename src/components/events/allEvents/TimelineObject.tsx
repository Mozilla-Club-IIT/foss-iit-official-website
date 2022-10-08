import React from 'react'
import Timelinkcard from './TimelineCard'
import styles from '../../../scss/events/AllEvents/Timeline.module.scss'

const TimelineObject = () => {
  return (
    <div className={styles.timelineObject}>
        <div className={styles.timeline}>
            <p className={styles.month}>SEP 2022</p>
            <div className={styles.circle}></div>
        </div>
        <Timelinkcard />
    </div>
  )
}

export default TimelineObject