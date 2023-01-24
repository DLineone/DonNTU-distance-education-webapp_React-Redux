import React from 'react';
import "./styles.css";

function PreloginLayout(props) {
    return ( 
        <div className={'prelogin-layaut'}>
            {props.children}
        </div>
    );
}

// {`- Кто же ты, путник?`}
//             {<br>`- Наверное, ...`}
export default PreloginLayout;