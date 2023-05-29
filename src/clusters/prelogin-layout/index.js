import React from 'react';
import "./styles.css";

function PreloginLayout(props) {
    return ( 
        <div className={'prelogin-layaut'}>
            {props.children}
        </div>
    );
}

export default PreloginLayout;