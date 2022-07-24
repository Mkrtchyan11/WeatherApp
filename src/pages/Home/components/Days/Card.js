import React from 'react'
import { GlobalSvgSelector } from '../GlobalSvgSelector';
import s from './Days.module.scss'



function  Card  ({data, day})  {
    const {main: { temp, feels_like  }, weather } = data
    
    console.log(data)
  return (
    <div className={s.card}>
    <div className={s.day}> {day}</div>
    <div className={s.day__info}>{Math.floor(temp)}° C</div>

    <div className={s.img}>
      <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="icon"/>
    </div>
    {/* <div className={s.img}>
      <GlobalSvgSelector id={icon_id} />
    </div>
    <div className={s.temp__day}>{temp_day}</div>
    <div className={s.temp__night}>{temp_night}</div>
    <div className={s.info}>{info}</div> */}
  </div>
);
};

export default Card
