import React from "react";
import { Meteors } from "../components/ui/meteors";
import vid1 from '../assets/images/vid3.mp4';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';
import mediaimg from '../assets/images/21.jpeg';
import constructionimg from '../assets/images/22.jpeg';
import foodimg from '../assets/images/23.jpeg';
import healthimg from '../assets/images/24.jpeg';
import itimg from '../assets/images/25.jpeg';
import disimg from '../assets/images/26.jpeg';
import renewimg from '../assets/images/27.jpeg';
import realimg from '../assets/images/28.jpeg';
import StickyWhatsApp from "../components/StickyWhatsapp";
import Chatbot from "../components/Chatbot";

function Services() {
  return (
    <>
      <StickyWhatsApp />
      <Chatbot />
      
      {/* Video Section */}
      <div className="w-full">
        <video src={vid1}
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-auto"
        />
      </div>

      {/* Service Cards Section */}
      <div className="my-5 flex flex-col md:flex-row flex-wrap justify-center items-center">
        {[
          { img: mediaimg, title: "Media", description: "Our media vertical is at the forefront of delivering cutting-edge content and innovative solutions in the ever-evolving media landscape.", link: "/media" },
          { img: constructionimg, title: "Construction", description: "Our Constructions vertical at Pioneer Ventures is dedicated to building the future with precision, innovation, and sustainability.", link: "/construction" },
          { img: foodimg, title: "Food & Beverages", description: "Our Food & Beverages vertical is dedicated to delivering exceptional culinary experiences and high-quality products.", link: "/food" },
          { img: healthimg, title: "HealthCare", description: "Our Healthcare vertical is dedicated to promoting wellness and holistic health through the power of Yunani and Ayurvedic medicines.", link: "/health" },
          { img: itimg, title: "Information Technology", description: "The Information Technology vertical at Pioneer Ventures is at the cutting edge of digital innovation and technological advancement.", link: "/it" },
          { img: disimg, title: "Media Distribution", description: "Our Media Distribution vertical is dedicated to efficiently delivering high-quality content to audiences around the world.", link: "/mediadistribution" },
          { img: renewimg, title: "Renewable Energy", description: "The Renewable Energy vertical is dedicated to advancing sustainable solutions through the development of biodegradable gas.", link: "/renew" },
          { img: realimg, title: "Real Estate", description: "The Real Estate vertical at Pioneer Ventures is committed to transforming spaces and creating vibrant communities.", link: "/real" }
        ].map((service, index) => (
          <div key={index} className="mx-3 my-5 w-full h-auto max-w-xs  relative shadow-xl">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-90 bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-cover border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{ backgroundImage: `url(${service.img})` }}>
              <div className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
                <h1 className="font-bold text-2xl text-white mb-4">
                  {service.title}
                </h1>
                <p className="font-normal text-base text-white mb-4">
                  {service.description}
                </p>
                <p className="text-white text-center">
                  <Link to={service.link}><LaunchIcon /></Link>
                </p>
                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
