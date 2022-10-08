import React from 'react'
import Timelinkcard from './TimelineCard'
import styles from '../../../scss/events/AllEvents/Timeline.module.scss'

const TimelineObject = () => {
  return (
    <div>
        <div className={styles.timeline}>
            <div className={styles.circle}></div>
        </div>
        <Timelinkcard />
    </div>
  )
}

export default TimelineObject