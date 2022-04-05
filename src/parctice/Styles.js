import React, { useState } from 'react';
import s from './style.module.css'
import './styleCommon.css'

import cn from 'classnames'

const Button = () =>{
    const [isColorfull, setIsColorfull] = useState(true);

    const handleClick = () =>{
        setIsColorfull((prevState) => !prevState);
    };
    console.log(isColorfull);
    return <button onClick={handleClick} className={cn({[s.red]:isColorfull, [s.blue]: !isColorfull})}>Change color</button>
}


export const Styles = () => {

    const stylesObj = {
        backgroundColor: 'red',
        color: 'blue'
    }
  return (
    <div className={cn(s.baseStyle, 'header')}>
        <div className='header'>
        I'm STYLED div!
        <Button />
        </div>
    </div>
  )
}
