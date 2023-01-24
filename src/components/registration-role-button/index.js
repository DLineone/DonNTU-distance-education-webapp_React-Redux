import React from 'react';
import "./style.css";

function RoleButton(props) {
    return (
        <div className='button-container'>
            <button className='role-button'>{props.text}</button>
        </div>
    );
}

export default RoleButton;