import React from 'react';
import "./style.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
                        <object data="./../../assets/mail-mini.svg" type="image/svg+xml"/>
                        <span className="popup">copied!</span>
                    </div>
                    <div style={{position: "relative"}} className=''>
                        {`Телефон: `} 
                        <CopyToClipboard text={"(+7) 949 301-07-09"}>
                            <span className='link'>(+7) 949 301-07-09</span> 
                        </CopyToClipboard>
                        {`ㅤ`} 
                        <object data="./../../assets/phone-mini.svg" type="image/svg+xml"/>
                        <span className="popup">copied!</span>
                    </div>
                </div>
            </div>
            <div className="site-messenger">
                <div className="footer-title">
                    Мессенджеры
                </div>
                <div className="footer-content">
                    <object className='footer-img' data="./../../assets/footer-vk.svg" type="image/svg+xml"/>
                    <object className='footer-img' data="./../../assets/footer-ok.svg" type="image/svg+xml"/>
                    <object className='footer-img' data="./../../assets/footer-tw.svg" type="image/svg+xml"/>
                    <object className='footer-img' data="./../../assets/footer-fb.svg" type="image/svg+xml"/>
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