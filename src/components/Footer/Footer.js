import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer_left"]}>
        <img src=" " alt="" className={styles["footer_albumLogo"]} />
        <div className={styles["footer_songInfo"]}>
          <h4>On the low...</h4>
          <p>Burna Boy</p>
        </div>
      </div>

      <div className={styles["footer_center"]}>
        <ShuffleIcon className={styles["footer__green"]} />
        <SkipPreviousIcon className={styles["footer__icon"]} />
        <PlayCircleOutlineIcon />
        <SkipNextIcon className={styles["footer__icon"]} />
        <RepeatIcon className={styles["footer__green"]} />
      </div>

      <div className={styles["footer_right"]}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer