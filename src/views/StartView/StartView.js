import React, { useState } from 'react';
import Header from './../../components/Header/Header';
import MainMenu from './../../components/MainMenu/MainMenu'

function StartView(props) {

    return (
        <div className="app_start-view">
            <Header />
            <MainMenu setAppState={ props.setAppState }/>
        </div>
    )
}

export default StartView;