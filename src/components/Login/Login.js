import React from 'react'
import { loginUrl } from '../../spotify'
import styles from "./Login.module.scss"

function Login() {
  return (
    <div className={styles.login}>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="🚀" />

      <a href={loginUrl}>LOGIN TO SPOTIFY 🎧 HERE</a>
    </div>
  )
}

export default Login