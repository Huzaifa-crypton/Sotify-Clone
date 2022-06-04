export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectURI = "http://localhost:3000/";
const redirectURI = "https://spotify-clone-6373a.web.app";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((inital, items) => {
      let parts = items.split("=");
      inital[parts[0]] = decodeURIComponent(parts[1]);
      // console.log(inital);
      return inital;
    }, {});
};
// export let loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectURI}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;

export const updateURL = (clientID) => {
  return `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
};
