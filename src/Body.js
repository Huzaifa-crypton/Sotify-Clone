import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow.js"

const Body = () => {
  // eslint-disable-next-line
  const [{discover_weekly} , dispatch] = useDataLayerValue();
  return (
    <>
    <div className="body">
      <img src={discover_weekly?.images[0]?.url} alt="image"  className="discoverImg"/>
      <div className="bodyText">
        <strong>PLAYLIST</strong>
        <h4>DISCOVER WEEKLY</h4>
        <p>{discover_weekly?.description}</p>
      </div>
    </div>
    <div className="icon">
        <PlayCircleFilledIcon fontSize="large" className="playbtn"/>
        <FavoriteIcon fontSize="large"/>
        <MoreHorizIcon fontSize="large"/>
    </div>
    <div className="songs">
      {discover_weekly?.tracks.items.map((item)=>{
        return (<SongRow track = {item.track}/>)
      })}

    </div>
    </>
  );
};

export default Body;
