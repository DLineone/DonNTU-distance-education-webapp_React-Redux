import React from 'react';
import "./style.css";

function TeacherHomeLayout(props) {
    return ( 
        <div className='teacher-home-layout'>
            {props.children}
        </div>
    );
}

export default TeacherHomeLayout;