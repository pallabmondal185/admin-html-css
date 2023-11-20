import React from 'react';

import './icon.css'

// right arrow icon
export const RightArrow = () => {
    return <i className='arrow-right'></i>
}

export const LeftArrow = () => {
    return <i className='arrow-left'></i>
}

// three line icon
export const ThreeLineIcon = () => {
    return (
        <div>
            <div className='three-line-menu'></div>
            <div className='three-line-menu'></div>
            <div className='three-line-menu'></div>
        </div>
    )
}

