import React from 'react';
import FormService from '../FormService';

const IT = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Content Section */}
      <div className="flex-1">
        <h1 className='text-4xl text-center md:text-left font-extrabold gradient-text   my-7'>
          INFORMATION TECHNOLOGY
        </h1>
        <p className='text-xl'>
          The Information Technology vertical at Pioneer Ventures is at the cutting edge of digital innovation and technological advancement. We specialize in providing comprehensive IT solutions that drive efficiency, security, and growth for businesses across various industries.
        </p>
        <p className='text-xl my-3'>
          Our services include software development, IT consulting, cybersecurity, website development, and digital marketing. With a team of highly skilled professionals, we are committed to delivering customized solutions that meet the unique needs of our clients.
        </p>
        <p className='text-xl my-3'>
          We leverage the latest technologies and industry best practices to ensure that our clients stay ahead in a rapidly evolving digital landscape. At Pioneer Ventures, our mission is to empower businesses through technology, helping them achieve their goals and transform their operations for the future.
        </p>
      </div>
      
      {/* Contact Form Section */}
      <div className="w-full md:w-1/3">
        <FormService />
      </div>
    </div>
  );
}

export default IT;
