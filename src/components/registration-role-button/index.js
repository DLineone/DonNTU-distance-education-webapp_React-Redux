import React from 'react';
import "./style.css";

function RoleButton(props) {
    return (
        <div className='button-container'>
            <button className='role-button' onClick={()=> {sessionStorage.setItem('registration-role', JSON.stringify(props.role))}}>{props.text}</button>
        </div>
    );
}

export default RoleButton;