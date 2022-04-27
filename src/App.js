import Login from './components/Login/Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useStateValue } from './DataLayer';

const spotify = new SpotifyWebApi()
// this creates an instance of the api so that we can use it in our app

function App() {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useStateValue()

  //Run this code based on token availability condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      //set the access token that now allows uses to utilize the spotify api
      spotify.setAccessToken(_token)

      //this should get the user's account, and it returns a promise too
      spotify.getMe(user)
        .then(user => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  })
  console.log("🚔", user)
  console.log("🚦", token)


  return (
    <div className="App">

      {token ? (
        <Player spotify={spotify} />
      ) :
        <Login />
      }

    </div>
  );
}

export default App;
