import React, { useState } from 'react';
import './header.css';
import { ThreeLineIcon } from '../../CustomComponents/Icons';

const Header = ({ setIsCloseSidebar }) => {

    const handleSidebar = () => {
        setIsCloseSidebar(prev => !prev);
    }

    return (
        <div className='container'>
            <div class="topnav" id='topnav'>
                <div>
                    <a class="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div
                    id="menu"
                    onClick={() => handleSidebar()}
                >
                    <a className='three-line-a'><ThreeLineIcon /></a>
                </div>

            </div>

            {/* <div style={{ paddingLeft: "16px" }}>
                <h2>Top Navigation Example</h2>
                <p>Some content..</p>
            </div> */}
        </div>
    )
}

export default Header;
