// @ts-nocheck
import React from 'react';
import SiteNav from '../../components/site-nav';
import SiteSign from '../../components/site-sign';
import "./styles.css";
import SiteButtonText from './../../components/site-button-text/index';
import SiteButtonImageText from './../../components/site-button-imagetext';
import logo from '../../assets/Logo.png';
import { ReactComponent as SignIn } from "./../../assets/sign-in.svg";
import { ReactComponent as Registration } from "./../../assets/registration.svg";
function SiteHeader() {
    return ( 
        <div className='site-header'>
            <div className="header-logo">
                <img className='header-logo-image' src={logo}/>
                <p className='header-logo-text'>
                    Центр<br /> дистанционного<br /> обучения ДонНТУ
                </p>
            </div>
            <SiteNav>
                <SiteButtonText name="Главная" to="/welcome"/>
                <SiteButtonText name="О нас" to="/"/>
                <SiteButtonText name="О проекте" to="/"/>
            </SiteNav>
            <SiteSign>
                <SiteButtonImageText name="Вход" to="/login" img={<SignIn className='button-img'/>}/>
                { !localStorage.getItem("token") &&
                <SiteButtonImageText name="Регистрация" to="/registration" img={<Registration className='button-img'/>}/>}
            </SiteSign>
        </div>
    );
}

export default React.memo(SiteHeader);