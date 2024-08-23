import React from 'react';
import FormService from '../FormService';

const Food = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text my-7'>
          FOOD & BEVERAGES
        </h1>
        <p className='text-xl'>
          Our Food & Beverages vertical is dedicated to delivering exceptional culinary experiences and high-quality products. We are passionate about food, sourcing the finest ingredients, and ensuring that every product meets our rigorous standards for taste, quality, and safety.
        </p>
        <p className='text-xl my-3'>
          Our portfolio includes a diverse range of offerings, from gourmet dining establishments and casual eateries to packaged foods and beverages. Innovation and sustainability are at the heart of our operations, as we strive to create delicious and nutritious options that cater to a wide array of preferences and dietary needs.
        </p>
        <p className='text-xl my-3'>
          At Pioneer Ventures, we are committed to excellence in every bite and sip, bringing joy and satisfaction to our customers through our food and beverage offerings.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default Food;
