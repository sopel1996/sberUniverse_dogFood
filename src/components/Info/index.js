import React from 'react'
export const Info = ({basket,favorite,name}) => {
    return (
    <div>

        <div>ЛАЙКИ {favorite.length}</div>
        <div>КОРЗИНА {basket.length}</div>
        <div>ИМЯ ЮЗЕРА {name}</div>
    </div>
  )
}
