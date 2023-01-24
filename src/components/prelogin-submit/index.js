import React from 'react';
import "./style.css";

function PreloginSubmit(props) {
    return ( 
        <div className='prelogin-submit'>
            <button>{props.text}</button>
        </div>
    );
}

export default PreloginSubmit;