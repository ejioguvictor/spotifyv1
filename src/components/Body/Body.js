import React from 'react'
import Header from '../Header/Header'
import styles from "./Body.module.scss"
import { useStateValue } from "../../DataLayer"

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue()

  return (
    <div className={styles.body}>
      <Header spotify={spotify} />
      <div className={styles["body_info"]}>
        <img
          src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="" />

        <div className={styles["body_infoText"]}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Body