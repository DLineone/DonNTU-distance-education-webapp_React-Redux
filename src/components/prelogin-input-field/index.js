import React from 'react';
import "./style.css";

function PreloginInputField(props) {
    return ( 
        <div className='prelogin-input-field'>
            <input type={props.type ? props.type : "text"} 
            onChange={(ent)=>{props.setData({...props.data, [props.value]: ent.target.value})}} 
            placeholder={props.placeholder}
            onKeyDown={(event)=>{if(event.key === "Enter") props.callback()}}
            pattern={props.pattern}
            />
        </div>
    );
}

export default PreloginInputField;