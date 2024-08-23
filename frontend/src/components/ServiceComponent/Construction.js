import React from 'react';
import FormService from '../FormService';

const Construction = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          CONSTRUCTION
        </h1>
        <p className='text-xl'>
          Our Construction vertical at Pioneer Ventures is dedicated to building the future with precision, innovation, and sustainability. We specialize in delivering high-quality construction projects that range from residential and commercial buildings to large-scale infrastructure developments.
        </p>
        <p className='text-xl my-3'>
          Our team of experienced professionals is committed to excellence in every aspect of the construction process, from planning and design to execution and completion. We prioritize safety, efficiency, and environmental responsibility, ensuring that our projects not only meet but exceed industry standards.
        </p>
        <p className='text-xl my-3'>
          At Pioneer Ventures, we are proud to contribute to the development of communities and the creation of spaces that enhance the quality of life for people.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default Construction;
