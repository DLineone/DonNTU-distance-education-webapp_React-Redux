import React,{useState} from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';

function AppLayout(props) {

    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);

    function onClickProfile()
    {
        setPopup(false);
    }

    function onClickExit()
    {
        let send = {
            "ButtonExit":{
                "token":sessionStorage.getItem("token"),
                "id_user":sessionStorage.getItem("id_user")}
        }
        fetch('http://ServerWebsite:3030/view/',{
            method: "POST",
            body: JSON.stringify(send)
        });
        sessionStorage.clear();
        navigate("/");
        setPopup(false);
    }

    return ( 
        <div className='app-layout'>
            <div className='app-header'>
                <div className='header-logo'>
                    <Link to='/' className='header-logo-image'>
                        <img  src="../../assets/app-logo.png"/>
                    </Link>
                </div>
                <div className='header-title'>
                    {props.title}
                </div>
                <div className='header-menu'>
                    <div className='button-img'>
                        <object className='button-img' data="./../../assets/app-notification.svg" type="image/svg+xml"/>
                    </div>
                    <div className='button-img' onClick={() => setPopup(true)}>
                        <object  data="./../../assets/user-photo.svg" type="image/svg+xml"/>
                    </div>
                    
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                            <div className={'popup-menu'}>
                                <Link onClick={onClickProfile} to="/teacher/profile">Профиль</Link>
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
                            <object className='menu-left-img' data={item.img} type="image/svg+xml"/>
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