import React from 'react';
import FormService from '../FormService';

const Renewable = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          RENEWABLE ENERGY
        </h1>
        <p className='text-xl'>
          The Renewable Energy vertical at Pioneer Ventures is dedicated to advancing sustainable solutions through the development of biodegradable gas and the production of CNG gas. Our focus is on harnessing clean energy sources to reduce environmental impact and promote a greener future. By converting organic waste into biodegradable gas and producing compressed natural gas (CNG), we provide efficient and eco-friendly alternatives to traditional fossil fuels.
        </p>
        <p className='text-xl my-3'>
          Our innovative technologies and commitment to sustainability drive us to lead in the renewable energy sector, offering reliable and renewable energy solutions. At Pioneer Ventures, we are committed to making a positive impact on the environment and contributing to a sustainable future for generations to come.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default Renewable;
