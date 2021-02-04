import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu( props ) {
    const [ path, setPath ] = useState( "" );
    const PUBLIC_URL = "/react/molla";

    useEffect( () => {
        setPath( window.location.href );
    } )

    return (
        <nav className="main-nav">
            <ul className="menu">
                <li className={ `megamenu-container` } id="menu-home">
                    <Link to={ `${process.env.PUBLIC_URL}` }>Home</Link>
                </li>
                <li className={ path.indexOf( "categories" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Products</Link>
                   </li>
                <li className={ path.indexOf( "blog/" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}