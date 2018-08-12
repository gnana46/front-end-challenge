import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'logo.svg';

export default () => {
    return (
        <header className="full-width">
            <Link to="/" className="logo"><img src={logo} alt="logo" /> </Link>
        </header>
    );
};
