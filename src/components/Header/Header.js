import React from 'react';
import { appContext } from './../../appContext';
import './Header.css';

function Header(){
    return(
        <header className="ui_header">
            <div className="ui_header-text">
                <appContext.Consumer>
                    {appContext => appContext.appName}
                </appContext.Consumer>
            </div>
        </header>
    )
}

export default Header;