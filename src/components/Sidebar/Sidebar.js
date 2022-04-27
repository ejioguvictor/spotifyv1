import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarTag from '../SidebarTags/SidebarTag'
import styles from "./Sidebar.module.scss"
import { useStateValue } from '../../DataLayer';
// import { getTokenFromResponse } from "./spotify";
// import { getTokenFromUrl } from '../../spotify';

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue()
  console.log("nnnnn", playlists)

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
      {/* working on get data from spotify to show playlists */}
      {playlists?.items?.map((playlist) => (
        <SidebarTag title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar