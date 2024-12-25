import Image from "next/image";
import HomePage from "./home/page";


export const metadata={
  title: "Best & Affordable Medical Tourism in India |  BigByteHealth India",
  description: " BigByteHealth.com - Simplifying your journey to premium healthcare in India. Affordable treatments at accreditedhospitals with expert medical professionals.",
}



export default function Home() {
  return (
    <main >
     <HomePage/>
      
    </main>
  );
}
