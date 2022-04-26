import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
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
      <SidebarTag title="Home" Icon={HomeIcon} />
      <SidebarTag title="Search" Icon={SearchIcon} />
      <SidebarTag title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className={styles["sidebar_title"]}>PLAYLISTS </strong>
      <hr />


    </div>
  )
}

export default Sidebar