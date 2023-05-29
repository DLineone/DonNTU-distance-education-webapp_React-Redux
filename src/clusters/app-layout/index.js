// @ts-nocheck
import React,{useEffect, useState} from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';
import { IconBell } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherProfile } from '../../store/teacher-profile-slice';
import AppLogo from "./../../assets/app-logo.png";
import { Skeleton } from '@mui/material';

function AppLayout(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false);
    const profile = useSelector(state => state.tc_profile.profile);

    useEffect(() => {
        
        dispatch(fetchTeacherProfile());
    },[])

    function onClickProfile()
    {
        setPopup(false);
    }

    function onClickExit()
    {
        fetch('http://dist.donntu.ru:3030/exit',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
            })
        })
        .then(response => response.json())
        .then(databack => {
            if(databack?.error)
            {
                alert(databack.error);
            }
        });
        localStorage.clear();
        navigate("/");
        setPopup(false);
    }

    return ( 
        <div className='app-layout'>
            <div className='app-header'>
                <div className='header-logo'>
                    <Link to='/' className='header-logo-image'>
                        <img  src={AppLogo}/>
                    </Link>
                </div>
                <div className='header-title'>
                    {props.title}
                </div>
                <div className='header-menu'>
                    <div className='button-img'>
                        <IconBell size={50} stroke={1.5}/>
                    </div>
                    {profile?.photo &&
                    <div className='user-photo button-img' style={{backgroundImage: `url(${profile?.photo})`}} onClick={() => setPopup(true)}/>
                    ||
                    <Skeleton className='user-photo button-img' animation="wave" variant="circular" sx={{ bgcolor: '#582f3d' }}>
                    </Skeleton>}
                    
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                            <div className={'popup-menu'}>
                                <Link onClick={onClickProfile} to="../profile" relative='path'>Профиль</Link>
                                <Link onClick={onClickExit} to="/">Выйти</Link>
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
            </div>
            <div className='bottom-part'>
                <div className='left-menu'>{props?.menuitems?.map(item =>
                    <div className='menu-left-item'>
                        <Link to={item.to}>
                            {item.img}
                        </Link>
                    </div>
                )}</div>
                <div className='content'>
                    {props.outlet}
                </div>
            </div>
        </div>
    );
}

export default AppLayout;