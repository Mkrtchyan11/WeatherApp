import React from 'react'
import Popup from '../../shared/Header/Popup/Popup'
// import { useDispatch, useSelector } from 'react-redux'
import Days from './components/Days/Days'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'



const Home = () => {
 

  return (
    <> 
    {/* <Popup/> */}
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay  />
        <ThisDayInfo />
      </div>
      <Days />
      
    </div>
  </>
  )
}

export default Home