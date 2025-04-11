import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <Tilt
                className="tilt-box"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                style={{ height: '150px', width: '150px' }}
            >
                <div className="logo-inner">
                    <img src={brain} alt="Logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
