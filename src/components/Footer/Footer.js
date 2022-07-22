import React, { useEffect, useState } from "react";
import { useStateValue } from "../../DataLayer"
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

function Footer({ spotify }) {

  const [{ token, item, playing }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles["footer_left"]}>
        <img
          className={styles["footer_albumLogo"]}
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className={styles["footer_songInfo"]}>
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className={styles["footer_songInfo"]}>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className={styles["footer_center"]}>
        <ShuffleIcon className={styles["footer_green"]} />
        <SkipPreviousIcon onClick={skipNext} className={styles["footer_icon"]} />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className={styles["footer_icon"]}
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className={styles["footer_icon"]}
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className={styles["footer_icon"]} />
        <RepeatIcon className={styles["footer_green"]} />
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
            <Slider className={styles.slider} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer