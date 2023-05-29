import React from 'react';
import "./style.css";

function PreloginInput(props) {
    return ( 
        <div className={'prelogin-input' + ' ' + props.animation}>
            <div className='prelogin-text'>
                {props.text}
            </div>
            <div className='prelogin-content'>
                {props.children}
            </div>
        </div>
     );
}

export default PreloginInput;
