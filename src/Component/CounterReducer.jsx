import React,{useReducer} from 'react'


const initialState = {
    count: 0,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
const CounterReducer = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count} <br />
      <button onClick={() => dispatch({ type: 'increment' })}>+ increment</button> <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>- decrement</button>
    </>
  )
}

export default CounterReducer
