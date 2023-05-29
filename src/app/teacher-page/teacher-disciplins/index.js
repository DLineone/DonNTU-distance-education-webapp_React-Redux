// @ts-nocheck
import React,{ useEffect, useState} from 'react';
import TeacherDisciplinsLayout from './../../../components/teacher-discipline-layout';
import { useOutletContext } from "react-router-dom";
import TeacherDiscipline from './../../../components/teacher-discipline';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherDisciplines } from './../../../store/teacher-disciplines-slice';
import { Skeleton } from '@mui/material';

function TeacherDisciplins() {
    
    const [setTitle] = useOutletContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const disciplinesList = useSelector(state => state.tc_disciplines.disciplinesList);
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        if(!localStorage.getItem("token"))
        {
            navigate("/");
            return;
        }
        setTitle('МОИ ДИСЦИПЛИНЫ');

        let searchParams = new URLSearchParams(window.location.search);
        if(searchParams.has('query'))
        {
            setQuery(searchParams.get('query'));
        }
        
        
    },[]);

    useEffect(() => {
        dispatch(fetchTeacherDisciplines({name: query}));
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set("query", query);
        window.history.pushState(null, '', '?' + searchParams.toString());
    }, [query]);

    

    return (  
        <div className='teacher-disciplins' style={{height: '100%', width: "100%"}}>
            <TeacherDisciplinsLayout outlet={<Outlet/>} query={query} setQuery={setQuery}>
                {disciplinesList && disciplinesList?.map((discipline)=>
                    <TeacherDiscipline discipline={discipline}/>
                ) ||
                [1,2,3,4,5,6].map((elem) => 
                    <Skeleton animation="wave" variant="rounded">
                        <TeacherDiscipline/>  
                    </Skeleton>        
                )}
            </TeacherDisciplinsLayout>
        </div>
    );
}

export default TeacherDisciplins;