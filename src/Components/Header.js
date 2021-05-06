import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
    <div>
        <h1 className={`centeredHeader ${props.isMainHeading?"extraCenter":""}`}>{props.heading}</h1>
    </div>
    )
}

export default Header;