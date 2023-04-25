import React from 'react'
import { useState } from 'react'
import Effect from './useffectCleanup'

const Function = () => {
    const [display, setDisplay] = useState()
    const visible = () => {
        setDisplay(true)
    } 
  return (
      <div>
          {!display && <Effect />}
          <button onClick={visible}> click here- ComponentwillUnmount</button>
      
    </div>
  )
}

export default Function
