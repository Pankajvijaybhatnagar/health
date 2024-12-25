import React from 'react'
import AccommodationService from './acc';





export const metadata = {
    title:"Travel & Accommodation - BigByteHealth India | Simplified Medical Travel Planning",
    description: "BigByteHealth India provides essential travel and accommodation information for medical tourists. From flight bookings to comfortable stays near top hospitals, we ensure a seamless healthcare journey.",
  };


function page() {
  return (
<>
<AccommodationService/>
</>    
)
}

export default page