/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


// import React from 'react';

const usEffectHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);
  

  // eslint-disable-next-line no-undef
  useEffect(() => {
    
    fetch("https://api.thecatapi.com/v1/images/search?limit=2")
      .then(response => response.json())
      .then(data => {
        setData(data);
       
      });
  }, []);


  

 

  return (
      <div style={{flexWrap:'wrap' , display:'flex'}}>
           {data && (
        <ul>
          {data.map(item => (
              <li key={item.id}> <img src={item.url} style={{width:'100px'}} alt="" /></li>
             
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default usEffectHook
