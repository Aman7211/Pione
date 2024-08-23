import React from 'react';
import FormService from '../FormService';

const RealEstate = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          REAL ESTATE
        </h1>
        <p className='text-xl'>
          The Real Estate vertical at Pioneer Ventures is committed to transforming spaces and creating vibrant communities. We specialize in the development, acquisition, and management of residential, commercial, and industrial properties. Our team focuses on delivering high-quality projects that meet the diverse needs of our clients, whether it's a family home, a business hub, or a modern retail space.
        </p>
        <p className='text-xl my-3'>
          We prioritize sustainable practices and innovative design to ensure our developments are not only aesthetically pleasing but also environmentally responsible. At Pioneer Ventures, we aim to enhance the quality of life through thoughtfully designed spaces that offer comfort, convenience, and value.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default RealEstate;
