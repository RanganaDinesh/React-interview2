import React ,{ useRef, useEffect } from 'react'

const UseRefHook = () => {
    // const [value, setValue] = useState('');
  const inputRef = useRef(null);

 useEffect(()=>{
    inputRef.current.focus();
  })
  return (
    <>
    <input type="text" ref={inputRef} />
    <button >Focus Input</button>
  </>
  ) 
}

export default UseRefHook
