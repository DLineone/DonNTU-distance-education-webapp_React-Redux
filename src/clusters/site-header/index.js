import React from 'react';
import SiteNav from '../../components/site-nav';
import SiteSign from '../../components/site-sign';
import "./styles.css";
import SiteButtonText from './../../components/site-button-text/index';
import SiteButtonImageText from './../../components/site-button-imagetext';

function SiteHeader() {
    return ( 
        <div className='site-header'>
            <div className="header-logo">
                <img className='header-logo-image' src="../../assets/Logo.png"/>
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
                <SiteButtonImageText name="Вход" to="/login" img="./../../assets/sign-in.svg"/>
                { !localStorage.getItem("token") &&
                <SiteButtonImageText name="Регистрация" to="/registration" img="./../../assets/registration.svg"/>}
            </SiteSign>
        </div>
    );
}

export default React.memo(SiteHeader);