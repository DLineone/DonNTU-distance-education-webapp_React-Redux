import React from 'react';
import "./style.css";

function PreloginInputField(props) {
    return ( 
        <div className='prelogin-input-field'>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default PreloginInputField;