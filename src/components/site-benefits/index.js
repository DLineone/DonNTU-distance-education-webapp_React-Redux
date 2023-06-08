// @ts-nocheck
import React from 'react';
import "./styles.css";
import IndBenefit from "./../site-ind-benefit";
import benefit1 from "./../../assets/benefit1png.png";
import benefit2 from "./../../assets/benefit2.png";
import benefit3 from "./../../assets/benefit3.png";

function SiteBenefits() {
    return ( 
        <div className="site-benefits">
            <div className="benefits-title">
                ЧТО МЫ МОЖЕМ ПРЕДЛОЖИТЬ
            </div>
            <div className="ind-benefits">
                <IndBenefit
                    title="Так просто?!"
                    img={benefit1}
                    text={`     Получайте высокие результаты обучения. Тенденции дистанционного обучения показали, что этот вид учебы ничем не уступает, и даже превосходит посещения лекций. Благодаря самостоятельной работе студенты гораздо лучше запоминают и глубже понимают материал.`}
                />
                <IndBenefit
                    title="Где хочу, там и учу!"
                    img={benefit2}
                    text={`     Никакой привязки к месту проживания студента. Другой город, другой регион или даже другой континент – сегодня не играет совершенно никакого значения, где вы находитесь. Главное – это компьютер и интернет. Дерзайте!`}
                />
                <IndBenefit
                    title="До сессии успею!"
                    img={benefit3}
                    text={`     Имейте неограниченный доступ к учебным материалам. Методическая система дистанционного обучения построена таким образом, что вы  можете получить доступ к онлайн-библиотекам со всеми материалами В ЛЮБОЕ ВРЕМЯ. `}
                />
            </div>
        </div>
    );
}

export default React.memo(SiteBenefits);