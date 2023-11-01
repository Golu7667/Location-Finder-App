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
    <div className='min-h-screen w-full   '>
      <div className=' h-8 font-extrabold  flex justify-center item-center pt-16' >Welcome To Find Your Location</div>
     <div className='flex justify-center item-center mt-8'>
      <div className='w-1/2 h-96 rounded-2xl shadow-xl shadow-gray-700 bg-slate-50  border-t-4'>
         <div className='w-full h-1/2 flex  justify-around pt-8'>
         <img className='w-32 h-32' src="/location.svg"/>
         <button  className='w-52 h-6 font-extrabold bg-sky-500 text-white rounded-xl hover:bg-sky-700 ' onClick={()=>handle()}>Find Your Loacation </button>
         </div>
         <div className='font-extrabold h-1/2 flex justify-center item-center mt-16'>
          <p className='w-1/2 mx-8'>Latitude: <text className='bg-white'>{latitude}</text> </p>
          <p className='w-1/2 mx-8'>Longitude: <text>{longitude}</text></p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default DynamicContent;
