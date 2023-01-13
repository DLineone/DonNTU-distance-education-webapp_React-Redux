import React from 'react';
import "./styles.css";

function IndBenefit(props) {
    return ( 
        <div className='ind-benefit'>
            <img className="benefit-img" src={props.img} alt="" />
            <div className="benefit-title">
                <object data="./../../assets/benefit-line.svg" type="image/svg+xml"/>
                <span className='benefit-title-text'>
                    {props.title}
                </span>
                <object data="./../../assets/benefit-line.svg" type="image/svg+xml"/>
            </div>
            <div className="benefit-text">
                {props.text}
            </div>
        </div>
    );
}

export default React.memo(IndBenefit);