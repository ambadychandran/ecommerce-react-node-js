import React from 'react';

import './custom-button.style.scss'


const CustomButton = ({ children, isGoogleSiginIn, inverted, ...otherprops }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSiginIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;