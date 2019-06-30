import React from 'react';
import GameInfo from '../../components/GameInfo/GameInfo';

function GameView (props) {


    return (
        <div className='app_game-view'>
            <GameInfo changeBg = {props.changeBg} />
        </div>
    );
}

export default GameView;