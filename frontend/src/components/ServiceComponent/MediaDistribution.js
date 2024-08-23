import React from 'react';
import FormService from '../FormService';

const MediaDistribution = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          MEDIA DISTRIBUTION
        </h1>
        <p className='text-xl'>
          At Pioneer Ventures, our Media Distribution vertical is dedicated to efficiently delivering high-quality content to audiences around the world. We specialize in the distribution of various media formats, including Internet & Broadband, IPTV, different OTT platforms, and cable TV, ensuring that our content reaches the right audience at the right time. Our extensive network and advanced distribution technologies enable us to provide seamless and reliable delivery of news, entertainment, and informational content.
        </p>
        <p className='text-xl my-3'>
          We work closely with creators, broadcasters, and platforms to maximize the reach and impact of our media products. At Pioneer Ventures, we are committed to excellence in media distribution, ensuring that our content is accessible, engaging, and impactful for diverse audiences.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default MediaDistribution;
