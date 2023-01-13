import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function SiteButtonText(props) {
    return ( 
        <div className='site-button'>
            <Link to={props.link}>
                <div className='button-text'>
                    {props.name}
                </div>
            </Link>
        </div>
    );
}

export default React.memo(SiteButtonText);