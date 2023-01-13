import React from 'react';
import "./styles.css";

function SiteNav(props) {
    return ( 
        <div className='site-nav'>
            {props.children}
        </div>
    );
}

export default React.memo(SiteNav);