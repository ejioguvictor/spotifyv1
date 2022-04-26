import React from 'react'
import SidebarTag from '../SidebarTags/SidebarTag'
import styles from "./Sidebar.module.scss"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarTag title="Home" />
      <SidebarTag title="Search" />
      <SidebarTag title="Your Library" />
    </div>
  )
}

export default Sidebar