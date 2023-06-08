import React from 'react';
import "./style.css";

function TeacherLogsLayout(props) {
    return (  
        <div className='teacher-logs-layout'>
            <div className='body'>
                {props.children}
            </div>
        </div>
    );
}

export default TeacherLogsLayout;