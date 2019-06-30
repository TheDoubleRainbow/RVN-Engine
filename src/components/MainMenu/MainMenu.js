import React, { useState } from 'react';
import './MainMenu.css'
function MainMenu() {

    const newGame = () => {
        console.log('New Game')
    }
    const loadGame = () => {
        console.log('Load Game')
    }

    const [menu] = useState({
        list: [
            { title: 'New Game', action: newGame },
            { title: 'Load', action: loadGame },
        ]
    });

    return (
        <div className="ui_main-menu">
            <ul className="ui_main-menu-list">
                {menu.list.map( item => 
                    <li className="ui_main-menu-item" key={item.title} onClick={item.action}>
                        {item.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MainMenu;