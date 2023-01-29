// @ts-nocheck

import React, {useEffect, useState, useCallback} from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';

function TeacherDiscipline(props) {
    
    const {discipline} = props;
    const [data, setData] = useState(undefined);
    const [popup, setPopup] = useState(false);
    const [flowForDiscipline, setFlow] = useState({id_flow: undefined, name_flow: "отсутсвует"});
    const navigate = useNavigate();

    useEffect(()=>{
        setData(discipline);
    })

    const onDelete = useCallback((e)=>{
        e.preventDefault()
        setPopup(false);
    },[]);

    const onEdit = useCallback((e)=>{
        e.preventDefault()

        let send = {
            "ButtonClickEditDiscipline":{
                "token":sessionStorage.getItem("token"),
                "id_user":sessionStorage.getItem("id_user"),
                "id_teacher":sessionStorage.getItem("id_teacher"),
                "id_discipline":discipline.id_list_discipline
            }
        };
        fetch('http://ServerWebsite:3030/view/',{
            method: "POST",
            body: JSON.stringify(send)
        })
            .then(response => response.json())
            .then(isok => {
                if(isok.error)
                {
                    alert(isok.error)
                }
                else
                {
                    localStorage.setItem("resavedata", JSON.stringify(isok));
                    localStorage.setItem("resavedatadist", discipline.id_list_discipline);
                    localStorage.setItem("resavedatadistname", discipline.name);
                    setPopup(false);
                    navigate("edit");
                }
            });
    },[]);

    const onAdd = useCallback((e)=>{
        e.preventDefault()
        
        let send = {
            "ButtonClickaddNewFlowDiscipline":{
                "token":sessionStorage.getItem("token"),
                "id_user":sessionStorage.getItem("id_user"),
                "id_teacher":sessionStorage.getItem("id_teacher"),
                "id_discipline":discipline.id_list_discipline
            }
        };
        fetch('http://ServerWebsite:3030/view/',{
            method: "POST",
            body: JSON.stringify(send)
        })
            .then(response => response.json())
            .then(isok => {
                if(isok.error)
                {
                    alert(isok.error)
                }
                else
                {
                    localStorage.setItem("resavedata", JSON.stringify(isok));
                    localStorage.setItem("resavedatadist", discipline.id_list_discipline);
                    localStorage.setItem("resavedatadistname", discipline.name_disc);
                    setPopup(false);
                    navigate("add");
                }
            });
    },[]);

    function onChange(e)
    {
        setFlow({id_flow: e.target.value, name_flow: e.target.options[e.target.selectedIndex].text});
    }
    
    return (  
        <div className='teacher-discipline'>
            {data && <>
            <div className='title-photo'>
                <img src="./../../../assets/TEMPLATE-discipline-background.png" alt="" />
            </div>
            <div className='title-name'>
                <span>{discipline.name_disc}</span>
            </div>
            <div className='group-flows'>
                <span>поток: </span> <select onChange={(e)=>onChange(e)}>
                    <option >отсутствует</option>
                    {discipline?.array_flows?.map((group_flow) =>
                        <option value={group_flow.id_flow}>{group_flow.name_flow}</option>
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
                                    <Link onClick={(e)=>onDelete(e)} to="">Удалить</Link>
                                    <Link onClick={(e)=>onEdit(e)} to="">Редактировать</Link>
                                    <Link onClick={(e)=>onAdd(e)} to="">Добавить поток</Link>
                                </div>
                        </ClickAwayListener>
                    )}
            </div></>}
        </div>
    );
}

export default React.memo(TeacherDiscipline);
