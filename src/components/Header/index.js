import React, { useState } from 'react'
import style from './style.module.css'
import '../../styleCommon.css'

import cn from 'classnames'

export const Header = ({changeList}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event)=>{
    const {
      target: {value},
    } = event
    console.log(value);


    changeList((prevList)=>{
      return prevList.filter(({name})=> name.includes(value))
    })
  }

  return (
    <div className={style.header}>
      <div className={cn('sectionInner', style.sectionInner)}>
      <div className={style.header__logo}>
        <img src=''/>
      </div>
      <div className={style.header__search}>
        <input onChange={handleChange}/>
      </div>
      <div className={style.header__btns}>
        btns
      </div>
      </div>
    </div>
  )
}
