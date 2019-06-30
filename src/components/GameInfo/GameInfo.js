import React, { useState, useEffect } from 'react';
import './GameInfo.css';

function GameInfo(props) {

    const [menu] = useState([
        { title: 'History', action: '', active: false },
        { title: 'Skip', action: '', active: false },
        { title: 'Auto', action: '', active: false },
        { title: 'Save', action: '', active: true },
        { title: 'Load', action: '', active: true },
        { title: 'Settings', action: '', active: false },
    ])

    useEffect(()=> {
        props.changeBg('bg1')
    })

    return (
        <div className="ui_game-info">
            <div className = "ui_game-info-menu">
                <ul className = "ui_game-info-menu-els">
                    {menu.map( item => (
                        <li className = {`ui_game-info-menu-el ${item.active ? 'active' : ''}`} onClick = {item.action} >{item.title}</li>
                    ))}
                </ul>
            </div>
            <div className = "ui_game-info-text">
                <div className = "ui_game-info-text-name">Dio: </div>
                <div className = "ui_game-info-text-content">ZA WARUDO</div>
            </div>
        </div>
    );
}

export default GameInfo;