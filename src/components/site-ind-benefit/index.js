// @ts-nocheck
import React from 'react';
import "./styles.css";
import { ReactComponent as BenefitLine } from "./../../assets/benefit-line.svg";

function IndBenefit(props) {
    return ( 
        <div className='ind-benefit'>
            <img className="benefit-img" src={props.img} alt="" />
            <div className="benefit-title">
                <BenefitLine/>
                <span className='benefit-title-text'>
                    {props.title}
                </span>
                <BenefitLine/>
            </div>
            <div className="benefit-text">
                {props.text}
            </div>
        </div>
    );
}

export default React.memo(IndBenefit);