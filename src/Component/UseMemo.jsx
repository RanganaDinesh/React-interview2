import React , { useMemo, useState } from 'react'

const UseMemo = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const sum = useMemo(() => {
        console.log('Computing sum...');
        return a + b;
      }, [a, b]);
  return (
    <>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>sum: {sum}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </>
  )
}

export default UseMemo
