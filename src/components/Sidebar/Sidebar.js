import React from 'react'
import styles from "./Sidebar.module.scss"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
    </div>
  )
}

export default Sidebar