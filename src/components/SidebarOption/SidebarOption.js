import React from 'react'
import styles from "./SidebarOption.module.scss"

function SidebarOption({ title, Icon }) {
  return (
    <div className={styles.SidebarOptions}>
      {Icon && <Icon className={styles.SidebarOptionsIcon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption;