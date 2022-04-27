import React from 'react'
import Header from '../Header/Header'
import styles from "./Body.module.scss"

function Body() {
  return (
    <div className={styles.body}>
      <Header />
    </div>
  )
}

export default Body