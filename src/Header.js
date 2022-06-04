import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@material-ui/core";
import { useDataLayerValue} from "./DataLayer"


const Header = () => {
    // eslint-disable-next-line
    const [{user} , dispatch] = useDataLayerValue();
    return (
    <div className = "header">
        <div className="headerLeft">
        <SearchIcon/>
        <input type="text" placeholder = "Search for Artists, Songs, or Albums" />
        </div>
        <div className="headerRight">
            <Avatar src={user?.images[0]?.url} alt="RQ" ></Avatar>
            <h4>{user?.display_name}</h4>
        </div>
        
    </div>
    )
};

export default Header;
