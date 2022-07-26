import React from 'react'
import s from './ThisDayInfo.module.scss'
import ThisDayItems from './ThisDayItems'
import cloud from '../../../../assets/images/cloud.png';
import { selectData } from '../../../../store/slices/data/data';
import { useSelector } from 'react-redux';
function ThisDayInfo  ()  {
  const data = useSelector(selectData)
// const items = [{
//   icon_id: 'temp', 
//   name: 'Ջերմաստիճան: ',
//   value: '20 թվում է 17 '
// },
// {
//   icon_id: 'pressure', 
//   name: 'ճնշում:',
//   value: '765 մմ սնդիկի սյուն, հարաբերական կայուն '
// },
// {
//   icon_id: 'precipitation', 
//   name: 'տեղումներ,',
//   value: 'առանց տեղումների եղանակ '
// },
// {
//   icon_id: 'wind', 
//   name: 'քամի-',
//   value: '3/ մ/ս հյուսիս-հարավ - թույլ քամի '
// }]
return (
  <div className={s.this__day_info}  >
<div className={s.this__day_info_items}>
  {/* {items.map((item)=> (
<ThisDayItems key={item.icon_id} item={item}/>
  ))} */}
  <ThisDayItems item={{
      icon_id: 'temp',
      name: 'Ջերմաստիճան: ',
      value: ` ${Math.floor(data.corentCountry.main.temp)} թվում է ${Math.floor(data.corentCountry.main.feels_like)} `
  }} />
  <ThisDayItems item={{
      icon_id: 'pressure',
      name: 'ճնշում:',
      value: ` ${data.corentCountry.wind.gust} մմ սնդիկի սյուն, հարաբերական կայուն `
  }} />
  <ThisDayItems item={{
      icon_id: 'wind',
      name: 'քամի-',
      value: ` ${data.corentCountry.wind.speed}  մ/ս `
  }} />

</div>
<div className={s.indicator}>
    
    </div>
    <img className={s.cloud__img} src={cloud} alt="облако" />
  </div>
)
}

  


export default ThisDayInfo