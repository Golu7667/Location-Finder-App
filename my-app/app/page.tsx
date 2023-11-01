// components/Location.js
'use client'
import { useState, useEffect } from 'react';


function DynamicContent() {
  const [isButton,setIsButton]=useState(false) 
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if(isButton){
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }
  }, [isButton]);

   const handle=()=>{
    setIsButton(true)
   }

  return (
    <div className='min-h-screen w-full bg-neutral-200  '>
      <div className=' h-8 font-extrabold  flex justify-center item-center pt-16' >Welcome To Find Your Location</div>
     <div className='flex justify-center item-center mt-8'>
      <div className='w-1/2 h-96 rounded-2xl shadow-2xl shadow-indigo-500/50 bg-blue-100 '>
         <div className='w-full h-36 flex  justify-around pt-8'>
         <img className='w-32 h-32' src="/location.svg"/>
         <button  className='w-52 h-6 font-extrabold bg-sky-500 text-white rounded-xl hover:bg-sky-700 ' onClick={()=>handle()}>Find Your Loacation </button>
         </div>
         <div className='w-full h-36'>
        {<div className='font-extrabold'>
          <p >Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        
        </div>
      }
      </div>
      </div>
      </div>
    </div>
  );
}

export default DynamicContent;
