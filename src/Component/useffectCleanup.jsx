import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useffectCleanup = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
    const [count, setCount] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            // eslint-disable-next-line no-undef
            setCount((prev) => {
                return prev + 1;
            })
        }, 1000)
        return () => {
            clearInterval(interval);
            console.log("Component interval")
        }
    },[])
  return (
      <div>
          {count}
      
    </div>
  )
}

export default useffectCleanup
