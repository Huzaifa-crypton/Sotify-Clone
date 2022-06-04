import React from "react";
import "./SideBar.css";
import { SideBarOptions } from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const SideBar = () => {
  // eslint-disable-next-line
  const [{ playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="sideBar__body">
      <img
        className="spotify_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SideBarOptions title="Home" Icon={HomeIcon} />
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Library" Icon={LibraryMusicIcon} />
      <br />

      <strong className="sideBarTitle">PLAYLISTS</strong>
      <hr />
      {/* // eslint-disable-next-line  */}
      {playlist?.items?.map((play) => {
        return <SideBarOptions title={play.name} />;
      })}
    </div>
  );
};

export default SideBar;
