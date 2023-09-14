import React from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';

import "./landingpage.css"

const LandingPage = ({apiKey}) => {
    return (
            <div className="main-container">
                <Navbar apiKey={apiKey}/>
                <Header/>
            </div>
    )
}


export default LandingPage;