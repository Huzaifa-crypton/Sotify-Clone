import React from "react";
import SideBar from "./SideBar";
import PlayerBody from "./PlayerBody";
import Footer from "./Footer";
import "./Player.css"

export default function Player() {
  return (
    <div className="player" >
      <div className="player__body">
        <SideBar></SideBar>
        <PlayerBody></PlayerBody>
      </div>
      <Footer></Footer>
    </div>

  );
}
