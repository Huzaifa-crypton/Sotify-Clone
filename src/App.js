import React,{ useEffect  } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
//import reducer from "./reducer";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();


function App() {
  // eslint-disable-next-line
  const [{ user ,token} , dispatch] = useDataLayerValue();
      // eslint-disable-next-line
  useEffect(()=>{

    const hash = getTokenFromURL();
      window.location.hash = "";
      const _token = hash.access_token;

      if (_token){
        dispatch({type:'SET_TOKEN' , token:_token})
        // token = _token;
        spotify.setAccessToken(_token);
        
        spotify.getMe().then((user)=>{
          dispatch({type:'SET_USER' , user:user})
        })
        spotify.getUserPlaylists().then((playlist)=>{
            

            dispatch({type: 'SET_PLAYLISt' , playlist : playlist})
            // console.log(playlist);
        })
        spotify.getPlaylist("37i9dQZEVXcJYNwVzZLiJm").then(response =>
           dispatch({type:"SET_DISCOVERWEEKLY" , discover_weekly:response,}) 
        )
      }
    },[]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app">
      {
        token ? (
          <Player></Player>
          ) : (
           <Login/>
          )
      }

    </div>
  );
}

export default App;
