import React from 'react';
import "./style.css";

function PreloginInputField(props) {
    return ( 
        <div className='prelogin-input-field'>
            <input type="text" 
            onChange={(ent)=>{props.setData({...props.data, [props.value]: ent.target.value})}} 
            placeholder={props.placeholder}
            onKeyDown={(event)=>{if(event.key === "Enter") props.callback()}}
            />
        </div>
    );
}

export default PreloginInputField;