import React from 'react'
import { GlobalSvgSelector } from '../GlobalSvgSelector';
import s from './Days.module.scss'



function  Card  ({data, day})  {
    const {main: { temp } } = data
    console.log(temp)
  return (
    <div className={s.card}>
    <div className={s.day}> {day}</div>
    <div className={s.day__info}>{Math.floor(temp)}° C</div>
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
