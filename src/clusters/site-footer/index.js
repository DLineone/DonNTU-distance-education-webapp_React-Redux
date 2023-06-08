// @ts-nocheck
import React from 'react';
import "./style.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ReactComponent as MailMini } from "./../../assets/mail-mini.svg";
import { ReactComponent as PhoneMini } from "./../../assets/phone-mini.svg";
import { ReactComponent as FooterVk } from "./../../assets/footer-vk.svg";
import { ReactComponent as FooterOk } from "./../../assets/footer-ok.svg";
import { ReactComponent as FooterTw } from "./../../assets/footer-tw.svg";
import { ReactComponent as FooterFb } from "./../../assets/footer-fb.svg";

function SiteFooter() {
    return ( 
        <div className='site-footer'>
            <div className="site-contact">
                <div className="footer-title">
                    <span>Свяжитесь с нами</span> 
                </div>
                <div className="footer-content">
                    <div>
                        {`1 корпус ДонНТУ –
                        Донецкая Народная Республика,
                        г. Донецк, ул. Артема, 58`}
                    </div>
                    <div style={{position: "relative"}} className=''>
                        {`Email:ㅤㅤ`}
                        <CopyToClipboard text={"donntu.info@mail.ru"}>
                            <span className='link'>donntu.info@mail.ru</span>
                        </CopyToClipboard>
                        {`ㅤ`} 
                        <MailMini/>
                        <span className="popup">copied!</span>
                    </div>
                    <div style={{position: "relative"}} className=''>
                        {`Телефон: `} 
                        <CopyToClipboard text={"(+7) 949 301-07-09"}>
                            <span className='link'>(+7) 949 301-07-09</span> 
                        </CopyToClipboard>
                        {`ㅤ`} 
                        <PhoneMini/>
                        <span className="popup">copied!</span>
                    </div>
                </div>
            </div>
            <div className="site-messenger">
                <div className="footer-title">
                    Мессенджеры
                </div>
                <div className="footer-content">
                    <FooterVk className='footer-img'/>
                    <FooterOk className='footer-img'/>
                    <FooterTw className='footer-img'/>
                    <FooterFb className='footer-img'/>
                </div>
            </div>
            <div className="site-links site-footer-elem">
                <div className="footer-title">
                    Быстрые ссылки
                </div>
                <div className="footer-content">
                    <div>
                        <a href="https://donntu.ru">Сайт ДонНТУ</a>
                    </div>
                    <div>
                        <a href="https://openedx.org">Платформа OpenEDX</a>
                    </div>
                    <div>
                        <a href="https://donntu.ru/library">Учебные материалы для студентов</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(SiteFooter);