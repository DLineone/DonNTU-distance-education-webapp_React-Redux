import React from 'react';
import "./styles.css";

function SiteMotivation() {
    return ( 
        <div className='site-motivation'>
            <div className="text1">
                <span className='white'>Маяк</span> розганяет мглу, <br />
                даруя путникам <span className='white'>ориентир</span>
            </div>
            <div className="text2">
                <span className='white'>Центр Дистанционного Обучения <br />
                ДонНТУ</span> - ваш <span className='white'>маяк</span> в мире обучения
            </div>
        </div>
     );
}

export default React.memo(SiteMotivation);