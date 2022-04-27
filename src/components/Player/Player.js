import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from "../Footer/Footer"
import styles from "./Player.module.scss"

function Player({ spotify }) {
  return (
    <div className={styles.player}>
      <div className={styles["player_body"]}>
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
        {/* <h1>Welcome to spotify dashboard page</h1> */}
      </div>

      <Footer />
    </div>
  )
}

export default Player