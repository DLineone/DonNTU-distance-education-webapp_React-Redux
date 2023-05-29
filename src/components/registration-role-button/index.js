import React from 'react';
import "./style.css";

function RoleButton(props) {
    return (
        <div className='button-container'>
            <button 
                className='role-button' 
                onClick={()=> {
                    localStorage.setItem('registration-role', JSON.stringify({id_role_user: props.role.id_role_user, id_role_db_univ: props.role.id_role_db_univ}));
                    props.callback();}}>
                    {props.text}
            </button>
        </div>
    );
}

export default RoleButton;