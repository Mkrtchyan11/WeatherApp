import React from 'react'
import Card from './Card';

import { useSelector } from 'react-redux'
import { selectData } from '../../../../store/slices/data/data'

import s from './Days.module.scss'
import Tabs from './Tabs';




const Days = () => {
   
  const days = useSelector(selectData).corentCountry.forecast
  return (
      <>  
      {/* <Tabs /> */}
  <div className={s.days}>

{days.map((data, idx) => (
    <Card key={idx} data={data} />
))}
  </div>
  </>
  )
}

export default Days