import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0 )
    const Handle = () => {
        setCount(
            count+1
        )
    }
  return (
      <div>
          <h1>{ count}   Counter</h1>
          <button onClick={Handle}>increment</button>
          <button onClick={()=>setCount(count+5)}>increment +5</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
          <button onClick={()=>setCount(count-2)}>Decrement -2</button>
        
    </div>
  )
}

export default Counter
