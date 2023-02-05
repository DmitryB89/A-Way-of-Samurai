import React from 'react';
import preloader from './../../assets/Images/XOsX.gif'

export const Preloader = () => {
    return (
        <div style={{backgroundColor:'white'}}>
            <img src={preloader} alt=""/>
        </div>
    );
};

