



import React from 'react'
import Card from './Card';
import { useSelector } from 'react-redux'

import { selectData } from '../../../../store/slices/data/data'

import s from './Days.module.scss'



const Days = () => {
  const { forecast } = useSelector(selectData)
  const daysOfTheWeek  = ['Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'հինգշաբթի', 'ՈՒրբաթ', 'Շաբաթ']

  return (
      <>  
  <div className={s.days}>

{forecast.map((data, idx) => (
    <Card key={data.day} data={data} day={daysOfTheWeek[idx]}/>
))}
  </div>
  </>
  )
}

export default Days