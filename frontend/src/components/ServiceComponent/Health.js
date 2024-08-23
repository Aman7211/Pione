import React from 'react';
import FormService from '../FormService';

const Health = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          HEALTHCARE
        </h1>
        <p className='text-xl'>
          At Pioneer Ventures, our Healthcare vertical is dedicated to promoting wellness and holistic health through the power of Yunani and Ayurvedic medicines.
        </p>
        <p className='text-xl my-3'>
          We believe in the ancient wisdom of these traditional healing systems, which offer natural and effective remedies for a wide range of health issues. Our focus is on sourcing the highest quality herbs and ingredients, ensuring that our products meet the strictest standards for purity and efficacy.
        </p>
        <p className='text-xl my-3'>
          We are committed to educating our customers about the benefits of Yunani and Ayurvedic practices, providing them with safe, reliable, and time-tested alternatives to modern pharmaceuticals. At Pioneer Ventures, we strive to enhance the well-being of our community by offering natural solutions that nurture the body, mind, and spirit together.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default Health;
