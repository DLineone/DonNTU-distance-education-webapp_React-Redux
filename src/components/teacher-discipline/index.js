// @ts-nocheck

import React, {useEffect, useState, useCallback} from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';
import Select  from 'react-select';
import { IconDots } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { deleteDiscipline, deleteDisciplineFlow } from './../../store/teacher-disciplines-slice';

function TeacherDiscipline(props) {
    
    const {discipline} = props;
    const [data, setData] = useState(undefined);
    const [popup, setPopup] = useState(false);
    const [selectedFlow, setFlow] = useState({id_flow: null, name_flow: "не выбрана"});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onDelete = useCallback((e)=>{
        e.preventDefault()
        setPopup(false);

        if(!discipline.edit_disc)
        {
            alert("Вы не создатель дисциплины и не можете редактировать её.");
            return;
        }
        
        if(!selectedFlow.id_flow)
        {
            dispatch(deleteDiscipline({id_disc: discipline.id_disc}));
            return;
        }
        else
        {
            dispatch(deleteDisciplineFlow({id_disc: discipline.id_disc, id_flow: selectedFlow.id_flow}));
            setFlow({id_flow: null, name_flow: "не выбрана"});
        }
        
    },[discipline,selectedFlow]);

    const onEdit = useCallback((e)=>{
        e.preventDefault()


        if(!discipline.edit_disc)
        {
            alert("Вы не создатель дисциплины и не можете редактировать её.");
            return;
        }

        if(!selectedFlow.id_flow)
        {
            navigate(`${discipline.id_disc}/edit`);
            setPopup(false);
            return;
        }

        if(selectedFlow.id_flow)
        {
            navigate(`${discipline.id_disc}/editflow/${selectedFlow.id_flow}`);
            setPopup(false);
            return;
        }
    },[discipline,selectedFlow]);

    const onAdd = useCallback((e)=>{
        e.preventDefault()
        
        if(!discipline.edit_disc)
        {
            alert("Вы не создатель дисциплины и не можете добавить поток.");
            return;
        }

        navigate(`${discipline.id_disc}/addflow`);
        setPopup(false);
    },[discipline,selectedFlow]);
    
    return (  
        <div className='teacher-discipline'>
            { discipline && <>
            <div className='title-photo' style={{backgroundImage: `url(${discipline.fon})`}}>
                
            </div>
            <div className='title-name'>
                <span>{discipline.name_disc}</span>
            </div>
            <div className='group-flows'>
                <span>поток: </span>
                <Select 
                    styles={styles} 
                    value={selectedFlow}
                    defaultValue={selectedFlow} 
                    options={discipline?.array_flow ? [{id_flow: undefined, name_flow: "не выбрана"}, ...discipline.array_flow] : [{id_flow: undefined, name_flow: "не выбрана"}]} 
                    getOptionValue={option => option.id_flow}
                    getOptionLabel={option => option.name_flow}
                    onChange={val => setFlow(val)}
                />
            </div>
            <div className='sub-menu'>
                    <div className='sub-sub-menu' onClick={() => setPopup(true)}>
                        <IconDots color='#7B4255' size={35} stroke={3}/>
                    </div>
                    <div className={selectedFlow.id_flow ? 'sub-menu-button' : 'sub-menu-button-disabled'}>
                        <Link to="">Перейти</Link>
                    </div>
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                                <div className={'popup-menu'}>
                                    <Link onClick={(e)=>onDelete(e)} to="">Удалить {selectedFlow.id_flow ? "поток" : "дисциплину"}</Link>
                                    <Link onClick={(e)=>onEdit(e)} to="">Редактировать {selectedFlow.id_flow ? "поток" : "дисциплину"}</Link>
                                    <Link onClick={(e)=>onAdd(e)} to="">Добавить поток</Link>
                                </div>
                        </ClickAwayListener>
                    )}
            </div></>
            }
        </div>
    );
}

export default React.memo(TeacherDiscipline);



const styles = {
    menu: ({ width, ...css }) => ({
        ...css,
        width: "max-content",
        minWidth: "100%",
        fontSize: '20px'
    }),
    control: css => ({
        ...css,
        width: '83%',
        fontSize: '20px'
    }),            
};
