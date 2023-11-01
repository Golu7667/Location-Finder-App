// components/Location.js
'use client'
import { useState, useEffect } from 'react';

function DynamicContent() {
  const [data, setData] = useState(null);
   
  useEffect(() => {
    // Fetch data from an API or perform other side effects
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading data...</p>}
    </div>
  );
}

export default DynamicContent;
