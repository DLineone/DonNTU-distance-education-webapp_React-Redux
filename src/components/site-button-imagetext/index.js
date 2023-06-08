import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function SiteButtonImageText(props) {
    return (
        <div className='site-button'>
            <Link className='link-button' to={props.to}>
                {props.img}
                <div className='button-text'>
                    {props.name}
                </div>
            </Link>
        </div>
    );
}

export default React.memo(SiteButtonImageText);