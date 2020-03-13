import React from 'react';
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png'
import './InfoBar.css'

function InfoBar({ room }) {
  return (
    <div className="infoBar">
     <div className="leftInnercontainer">
       <img className="onlineIcon" src={onlineIcon} alt="online icone" />
       <h3 className="room"> {`Chat Room : ${room}`}</h3>
       </div> 
      <div className="rightInnerContainer">
        <a href="/"> <img src={closeIcon} alt="close icon" /> </a>
      </div>

    
      
    </div>
  );
}

export default InfoBar;
