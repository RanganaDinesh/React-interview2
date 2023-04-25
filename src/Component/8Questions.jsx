import React, { useState, useEffect, useContext } from 'react';

// createContext and useContext for sharing state
const ThemeContext = React.createContext('light');
function useTheme() {
  return useContext(ThemeContext);
}

// Component that consumes context value
function Button(props) {
  const theme = useTheme();
  return <button style={{ background: theme }}>Click Me</button>;
}

// Component that uses useEffect to fetch data
function DataDisplay(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </>
  );
}

// Component tree that provides and consumes context
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Button />
      <DataDisplay />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}
//Here's an example of how useCallback can be used to memoize a function:
import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Function that is memoized using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment Count</button>
    </>
  );
}
//Here's an example of how useMemo can be used to memoize a computation:
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Expensive computation that is memoized using useMemo
  const expensiveCount = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <div>Expensive Count: {expensiveCount}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}
