import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function SiteButtonImageText(props) {
    return (
        <div className='site-button'>
            <Link className='link-button' to={props.to}>
                <object className='button-img' data={props.img} type="image/svg+xml"/>
                <div className='button-text'>
                    {props.name}
                </div>
            </Link>
        </div>
    );
}

export default React.memo(SiteButtonImageText);