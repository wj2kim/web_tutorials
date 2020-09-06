import React from 'react'
import './styles.scss';
import Logo from '../../img/coffee_logo.png';

const Header = props => {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="simple logo" />
                </div>
            </div>
        </div>
    );
};

export default Header;