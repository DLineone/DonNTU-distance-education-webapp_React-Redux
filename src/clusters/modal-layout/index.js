import React from 'react';
import "./style.css";

function ModalLayout(props) {
    return (  
        <div className='modal-layout'>
            {props.children}
        </div>
    );
}

export default ModalLayout;