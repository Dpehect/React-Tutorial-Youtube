import React, {useState, useCallback} from 'react'

function Counter(){

  const [count,setCount] = useState(0)

  const artırmaFonksiyonu = useCallback(()=>{
    setCount(prevCount=>prevCount+1)
  })

  const azaltmaFonksiyonu = useCallback(()=>{
    setCount(prevCount=>prevCount-1)
  })

  return (

    <div>

      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={artırmaFonksiyonu}>+ </button>
      <button onClick={azaltmaFonksiyonu}>- </button>

    </div>

  )
}
export default Counter
