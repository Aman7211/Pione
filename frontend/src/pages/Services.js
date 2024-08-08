import React from "react";
import { Meteors } from "../components/ui/meteors";
import vid1 from '../assets/images/vid3.mp4';
import LaunchIcon from '@mui/icons-material/Launch';
import {Link} from 'react-router-dom';
import mediaimg from '../assets/images/21.jpeg';
import constructionimg from '../assets/images/22.jpeg';
import foodimg from '../assets/images/23.jpeg';
import healthimg from '../assets/images/24.jpeg';
import itimg from '../assets/images/25.jpeg';
import disimg from '../assets/images/26.jpeg';
import renewimg from '../assets/images/27.jpeg';
import realimg from '../assets/images/28.jpeg';

 function Services() {

 
  return (
    <>

    {/* video section   of section page  */}
    <div className="flex">
    <div className="w-[50%]">
     <video src={vid1}
     controls={false}
     autoPlay
     muted
     playsInline
     loop
     />
    </div>
<div className="w-[50%]">
<video
  className="w-[800px]"
  src={vid1}
  controls={false}
  autoPlay
  playsInline
  muted
  loop />
</div>
    </div>
{/* 
    <div className="absolute top-[300px] z-50">
      <h1 className="text-4xl p-4 bg-white opacity-80 tracking-4">PORTFOLIO</h1>
    </div> */}


<div className="mx-[30px] md:mx-0 my-5">
    <div className="flex flex-col md:flex-row md:justify-evenly ">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  border border-gray-800  overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${mediaimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Media  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Our media vertical is at the forefront of delivering cutting-edge content and innovative solutions in the ever-evolving media landscape. 
          </p>
          <p className="text-white text-center"><Link to={"/media"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${constructionimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Construction  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Our Constructions vertical at Pioneer Ventures is dedicated to building the future with precision, innovation, and sustainability.
       </p>
          <p className="text-white text-center"><Link to={"/construction"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${foodimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Food & Beverages  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Our Food & Beverages vertical is dedicated to delivering exceptional culinary experiences and high-quality products. 
</p>          <p className="text-white text-center"><Link to={"/food"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${healthimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           HealthCare  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
           Our Healthcare vertical is dedicated to promoting wellness and holistic health through the power of Yunani and Ayurvedic medicines.
     </p>
          <Meteors number={20} />
          <p className="text-white text-center"><Link to={"/health"}><LaunchIcon/></Link></p>
         </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${itimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Information Technology  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          The Information Technology vertical at Pioneer Ventures is at the cutting edge of digital innovation and technological advancement.
</p>          <p className="text-white text-center"><Link to={"/it"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${disimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Media Distribution
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
        Our Media Distribution vertical is dedicated to efficiently delivering high-quality content to audiences around the world.
         </p>
          <p className="text-white text-center"><Link to={"/mediadistribution"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${renewimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Renewable Energy  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          The Renewable Energy vertical is dedicated to advancing sustainable solutions through the development of biodegradable gas.     </p>
          <p className="text-white text-center"><Link to={"/renew"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{backgroundImage : `url(${realimg})`}}>
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Real Estate  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          The Real Estate vertical at Pioneer Ventures is committed to transforming spaces and creating vibrant communities. 
      </p>
          <p className="text-white text-center"><Link to={"/real"}><LaunchIcon/></Link></p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}



export default Services;