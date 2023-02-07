import React, { useEffect, useState } from 'react'

function T() {

    const [title, setTitle] = useState(0)
    const [a, setA] = useState(0)

    useEffect(()=>{
        document.title=title
        console.log(title, a)
    },[title])

  return (
    <div>
      <button onClick={()=>setTitle(title+1)}>+</button>
      <button onClick={()=>setA(a+1)}>A+</button>

    </div>
  )
}

export default T
