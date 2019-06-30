import React, { useState } from 'react';
import Header from './../../components/Header/Header';
import MainMenu from './../../components/MainMenu/MainMenu'

function StartView() {

    return (
        <div className="app_start-view">
            <Header />
            <MainMenu />
        </div>
    )
}

export default StartView;