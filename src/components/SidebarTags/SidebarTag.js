import React from 'react'
import styles from "./SidebarTags.module.scss"

function SidebarTag({ title, Icon }) {
  return (
    <div className={styles.sidebarTags}>
      {Icon && <Icon className={styles.sidebarTagsIcon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarTag;