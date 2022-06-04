import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import {Slider,Grid} from "@material-ui/core";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
  return (
    <div className="footer" onLoad={()=>alert("This is a spotify clone. At the moment it will only show you your playlists and the discover weekly list. Other functionalities are not implemented yet")}>
        <div className="footerLeft">
          <img className = "albumLogo" src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=1500w" alt="" />
          <div className="footerAlbum">
            <h4 className="albumName">Usher</h4>
            <p className="albumDesc">Yeah!</p>
          </div>
        </div>
        <div className="footerCenter">
          <ShuffleIcon className='footerGreen'/>
          <SkipPreviousIcon className='footerIcon'></SkipPreviousIcon>
          <PlayCircleOutlineIcon fontSize='large' className='footerIcon'></PlayCircleOutlineIcon>
          <SkipNextIcon className='footerIcon'></SkipNextIcon>
          <RepeatIcon className='footerGreen'></RepeatIcon>
        </div>
        <div className="footerRight">
        <Grid container spacing={2}>
          <Grid item>
          <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
          <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
          <Slider/>
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer