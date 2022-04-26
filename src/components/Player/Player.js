import React from 'react'
import styles from "./Player.module.scss"

function Player({ spotify }) {
  return (
    <div className={styles.player}>
      <div className={styles["player_body"]}>
        {/* Sidebar */}
        {/* Body */}
        <h1>Welcome to spotify dashboard page</h1>
      </div>

      {/* Footer */}
    </div>
  )
}

export default Player