// @ts-nocheck
import React, {useState} from 'react';
import "./style.css";
import { Skeleton } from '@mui/material';
import ImgLeft from "./../../assets/showcase-disciplines-butotn-left.png";
import ImgRight from "./../../assets/showcase-disciplines-button-right.png";
import { useNavigate } from 'react-router-dom';

function TeacherDisciplineShowcase(props) {

    const [displace, setDisplace] = useState(0);
    const navigate = useNavigate();

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
            {props?.disciplins?.slice && <><div className='button-left'>
                <img onClick={changedispleft} src={ImgLeft} alt="" />
            </div>
                {props.disciplins.slice(displace, displace + 5).map(item => 
                    <div onClick={() => {navigate(`../disciplins?query=${item.name_disc}`)}} style={{backgroundImage: `url(${item.fon})`}} className='showcase-item' >
                        
                        <span >{item.name_disc}</span>
                    </div>
                )}
            <div className='button-right'>
                <img onClick={changedispright} src={ImgRight} alt="" />
            </div></>
            ||
            <><div className='button-left'>
                <img src="./../../assets/showcase-disciplines-butotn-left.png" alt="" />
            </div>
                {[1,2,3,4,5].slice(displace, displace + 5).map(item => 
                    <Skeleton className='showcase-skeleton' animation="wave" variant="rounded">

                    </Skeleton>
                )}
            <div className='button-right'>
                <img  src="./../../assets/showcase-disciplines-button-right.png" alt="" />
            </div></> 
            ||
            <>
                <div className='soft-error'>НЕТ ДОСТУПНЫХ ДИСЦИПЛИН</div>
            </>}
        </div>
    );
}

export default TeacherDisciplineShowcase;

