import React from 'react';
import FormService from '../FormService';

const Media = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          MEDIA
        </h1>
        <p className='text-xl'>
          At Pioneer Ventures, our media vertical is at the forefront of delivering cutting-edge content and innovative solutions in the ever-evolving media landscape. We specialize in creating high-quality, engaging content that resonates with diverse audiences across various platforms.
        </p>
        <p className='text-xl my-3'>
          From television and digital media to print and radio, our media division is committed to excellence and creativity.
        </p>
        <p className='text-xl my-3'>
          We leverage advanced technologies and industry expertise to provide compelling stories, insightful news, and entertainment that inspire and connect people. Our mission is to lead the way in media innovation, setting new standards for quality and integrity in the industry.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default Media;
