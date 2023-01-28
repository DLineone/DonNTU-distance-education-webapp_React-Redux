// @ts-nocheck

import React, {useState} from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';

function TeacherDiscipline(props) {

    const {discipline} = props;
    if(!discipline?.group_flows.find(elem => elem.name === "отсутствует"))
        discipline?.group_flows.unshift({name:"отсутствует", id:undefined});
    discipline.curent_flow = undefined;

    const [popup, setPopup] = useState(false);
    const [flowForDiscipline, setFlow] = useState({text: "отсутсвует", value: undefined});

    function onChange(e)
    {
        setFlow({text: e.text, value: e.value});
        discipline.curent_flow = flowForDiscipline;
        console.log(flowForDiscipline);
    }
    
    return (  
        <div className='teacher-discipline'>
            <div className='title-photo'>
                <img src={discipline.photo} alt="" />
            </div>
            <div className='title-name'>
                <span>{discipline.name}</span>
            </div>
            <div className='group-flows'>
                <span>поток: </span> <select onChange={(e)=>onChange(e)}>
                    {discipline?.group_flows?.map((group_flow) =>
                        <option value={group_flow.id}>{group_flow.name}</option>
                    )}
                </select>
            </div>
            <div className='sub-menu'>
                    <div className='sub-sub-menu' onClick={() => setPopup(true)}>
                        <object data="./../../assets/menu-triple-dot.svg" type=""></object>
                    </div>
                    <div className='sub-menu-button'>
                        <Link to="">Перейти</Link>
                    </div>
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                                <div className={'popup-menu'}>
                                    <Link onClick={() => setPopup(false)} to="">Удалить</Link>
                                    <Link onClick={() => setPopup(false)} to="edit">Редактировать</Link>
                                    <Link onClick={() => setPopup(false)} to="add">Добавить поток</Link>
                                </div>
                        </ClickAwayListener>
                    )}
            </div>
        </div>
    );
}

export default TeacherDiscipline;
