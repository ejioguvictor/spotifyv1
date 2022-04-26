import React from 'react'
import styles from "./SidebarTags.module.scss"

function SidebarTag({ title, Icon }) {
  return (
    <div className={styles.sidebarTags}>
      <p>{title}</p>
    </div>
  )
}

export default SidebarTag;