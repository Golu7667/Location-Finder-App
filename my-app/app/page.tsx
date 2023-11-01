// components/Location.js
'use client'
import { useState, useEffect } from 'react';

function DynamicContent() {
  const [data, setData] = useState(null);
  const [isButton,setIsButton]=useState(false) 

  useEffect(() => {
    // Fetch data from an API or perform other side effects
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [isButton]); // Empty dependency array means the effect runs once after the initial render

   const handle=()=>{
    setIsButton(true)
   }

  return (
    <div>
      {data ? <p>Data: {data}</p> :
      <button onClick={()=>handle}>Find Your Loacation </button>
      
      }

    </div>
  );
}

export default DynamicContent;
