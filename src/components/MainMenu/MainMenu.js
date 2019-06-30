import React, { useState } from 'react';
import './MainMenu.css'
function MainMenu(props) {

    const newGame = () => {
        props.setAppState('gameView')
    }
    const loadGame = () => {
        console.log('Load Game')
    }

    const [menu] = useState({
        list: [
            { title: 'New Game', action: newGame, active: true },
            { title: 'Load', action: loadGame, active: false },
        ]
    });

    return (
        <div className="ui_main-menu">
            <ul className="ui_main-menu-list">
                {menu.list.map( item => 
                    <li className={`ui_main-menu-item ${ item.active ? 'active' : ''}`} key={item.title} onClick={item.action}>
                        {item.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MainMenu;