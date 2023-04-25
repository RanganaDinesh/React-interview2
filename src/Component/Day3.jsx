import React from 'react'
import Counter from '../Counter'
import Effect from './usEffectHook'
// import Interval from './useffectCleanup'
import Function from './Function'
import CounterReducer from './CounterReducer'
import UseMemo from './UseMemo'
import UseRefHook from './UseRefHook'

const Day3 = () => {
  return (
    <>
    <h1  style={{textAlign:'center'}}>REACT  INTERVIEW QUESTIONS DAY 3 </h1>
    <div style={{width:'950px', marginLeft:'500px'}}>
       
          <h3>1.Difference between Axios and fetch</h3>
        <table border={'1px'}>
          <tr>
            <th>Axios</th>
            <th>fetch</th>
          </tr>
          <tr>
            <td>The syntax for Axios and Fetch is different. Axios is a third-party library that needs to be imported into your project. Axios uses a Promise-based syntax and provides an easy-to-use API.</td>

            <td>Fetch is a native browser API.
Fetch uses a more low-level syntax that requires a bit more boilerplate code.
</td>
          </tr>
          <tr>
            <td>Axios has built-in error handling, Axios automatically rejects the Promise if there is an error.</td>
            <td>while Fetch requires you to check the status of the response and handle errors manually.With Fetch, you have to check the status of the response and throw an error yourself.</td>
          </tr>
          <tr>
            <td>Axios allows you to intercept requests or responses before they are handled by the then or catch methods, making it easier to modify the request or response.</td>
            <td>Fetch doesn't have built-in interceptors, so you have to handle modifications manually.</td>
          </tr>
         </table>
          <h3>2.What is UseState Hook ?(Implementation)</h3>
          <p><Counter/></p>
        <h3>3.What is useEffect Hook ?(Implementation)</h3>
      
        <p>useEffect is a React Hook that allows you to handle side effects in your functional components. Side effects are operations that are not related to rendering your UI but can still affect your component's behavior, such as fetching data from an API, subscribing to events, or manipulating the DOM.</p>
        <Effect/>
        <h3>4.clean up in useEffect</h3>
      <Function/>
        
          <p></p>
          <h3>5.What is UseReducer Hook ?(Implementation)</h3>
        <p>useReducer is a React hook that allows you to manage state in your components. It is similar to useState, but offers more powerful capabilities for handling complex state changes. useReducer follows the reducer pattern, which is commonly used in Redux, a popular state management library for React.</p>
        <CounterReducer/>
          <h3>6.What is UseMemo Hook ?(Implementation)</h3>
        <p>useMemo is a React hook that allows you to optimize performance by memoizing expensive computations so that they are only re-computed when their dependencies change. It is similar to React.memo, but applies to individual values rather than entire components.</p>
        <UseMemo/>
          <h3>7.What is UseRef Hook ?(Implementation)</h3>
        <p>useRef is a React hook that allows you to create a mutable reference that persists across re-renders. It can be used for accessing DOM elements, storing previous values, or creating a reference to an object that needs to be accessed by different parts of your code. </p>
        <UseRefHook />
        <h3>8.Difference between useEffect and useContext ?</h3>
        <p><strong>useEffect</strong> <br />useEffect is used to handle side effects in functional components, such as fetching data from an API, updating the document title, or subscribing to a WebSocket. It is called after every render of the component and allows you to perform actions after the component has rendered or before it will unmount. <br />createContext and useContext for sharing state <br />Component that consumes context value</p>
        <p><strong>useContext</strong><br />useContext, on the other hand, is used to consume values from a context provider that have been passed down the component tree. It allows you to access shared state or functions without having to pass them down through props. <br />Component that uses useEffect to fetch data <br />Component tree that provides and consumes context</p>
        <h3>9.What is the use of useCallback and useMemo</h3>
        <p><strong>useCallback</strong> is used to memoize a function and prevent it from being recreated on every render. This can be useful when passing functions down to child components as props, as it can help prevent unnecessary re-renders of those child components.</p>
        <p><strong>useMemo</strong>useMemo is used to memoize the result of a computation and prevent it from being recalculated on every render. This can be useful for expensive calculations that don't need to be performed every time the component renders.</p>
      </div>
      </>
  )
}

export default Day3
