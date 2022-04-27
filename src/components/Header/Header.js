import React from "react";
import { useStateValue } from "../../DataLayer"
import { Avatar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.scss"

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  console.log("user", user)

  return (
    <div className={styles.header}>
      <div className={styles["header_left"]}>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className={styles["header_right"]}>
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;