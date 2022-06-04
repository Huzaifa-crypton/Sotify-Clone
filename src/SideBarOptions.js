import React from 'react'
import "./sideBarOptionBody.css"

export const SideBarOptions = ({title , Icon}) => {
  return (
        <div className="sideBarOptionBody">
            {Icon && <Icon className="sideBarOptionIcon" style={{ fontSize: 50 }}></Icon>}
            {Icon ? <h3>{title}</h3> : <p>{title}</p>}
        </div>
  )
}
