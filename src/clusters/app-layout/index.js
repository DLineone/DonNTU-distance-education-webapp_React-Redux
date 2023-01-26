import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function AppLayout(props) {
    return ( 
        <div className='app-layout'>
            <div className='app-header'>
                <div className='header-logo'>
                    <Link to='/' className='header-logo-image'>
                        <img  src="../../assets/app-logo.png"/>
                    </Link>
                </div>
                <div className='header-title'>
                    {props.title}
                </div>
                <div className='header-menu'>
                    <object className='button-img' data="./../../assets/app-notification.svg" type="image/svg+xml"/>
                    <object className='button-img' data="./../../assets/user-photo.svg" type="image/svg+xml"/>
                </div>
            </div>
            <div className='bottom-part'>
                <div className='left-menu'>{props?.menuitems?.map(item =>
                    <div className='menu-left-item'>
                        <Link to={item.to}>
                            <object className='menu-left-img' data={item.img} type="image/svg+xml"/>
                        </Link>
                    </div>
                )}</div>
                <div className='content'>
                    {props.outlet}
                </div>
            </div>
        </div>
    );
}

export default AppLayout;