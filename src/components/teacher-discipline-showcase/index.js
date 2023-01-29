import React, {useState} from 'react';
import "./style.css";

function TeacherDisciplineShowcase(props) {

    const [displace, setDisplace] = useState(0);

    function changedispright()
    {
        if(displace + 5 < props.disciplins.length)
        setDisplace(displace + 1);
    }
    function changedispleft()
    {
        if(displace > 0)
        setDisplace(displace - 1);
    }
    return ( 
        <div className='teacher-discipline-showcase'>
            <div className='button-left'>
                <img onClick={changedispleft} src="./../../assets/showcase-disciplines-butotn-left.png" alt="" />
            </div>
                {props.disciplins.slice(displace, displace + 5).map(item => 
                    <div className='showcase-item'>
                        <img src="./../../assets/TEMPLATE-discipline1.png" alt="" />
                        <span>{item.name_disc}</span>
                    </div>
                )}
            <div className='button-right'>
                <img onClick={changedispright} src="./../../assets/showcase-disciplines-button-right.png" alt="" />
            </div>
        </div>
    );
}

export default TeacherDisciplineShowcase;

