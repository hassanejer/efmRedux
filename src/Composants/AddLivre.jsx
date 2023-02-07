import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_livre } from '../Config/action'

function AddLivre() {
    const [title, setTitle] = useState({})
    const dispatch = useDispatch()
    const handleChange =(e) =>{
        const {name, value} = e.target
        setTitle({...title,[name]:value})
    
    }
    const handleClick = ()=>{
        dispatch(add_livre(title))
    }
  return (
    <div>
      <input onChange={handleChange} type="text" name='title' />
      <input onChange={handleChange} type="text" name='saber' />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddLivre
