import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function AppHomeButtons(props) {
    return (  
        <div className='app-home-buttons'>
            {props.menuitems.map(item => 
                <Link className='menu-item' to={item.to}>
                    {item.img}
                    <span className='item-title'>{item.title}</span>
                </Link>
            )}
        </div>
    );
}

export default AppHomeButtons;