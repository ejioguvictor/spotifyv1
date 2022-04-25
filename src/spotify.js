// here the authentication implementations and endpoints are enclosed

// steps:
// 1.click login button
// 2. redirect to Spotify login page
// 3. use redirected to homepage once logged in/ authorized
export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/";

const clientId = "781aeaeeccb9423193dc6189181d52c2"


//these scopes allows permissions functionality to users on the app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]

//to retrieve the access token from the user trying to log in
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
//once authenticated, go ahead and give me a token , which rep ur pass/authentication