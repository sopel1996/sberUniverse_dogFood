import React from 'react'

export const CreateItem = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Добавить товар');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name='name'/>
        <input name='description'/>
        <input name='price'/>
        <button>Добавить товар</button>
    </form>
  )
}
