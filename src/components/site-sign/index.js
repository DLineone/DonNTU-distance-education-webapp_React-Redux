import React from 'react';
import "./styles.css";

function SiteSign(props) {
    return ( 
        <div className='site-sign'>
            {props.children}
        </div>
    );
}

export default React.memo(SiteSign);