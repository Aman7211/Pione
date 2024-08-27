import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Care from '../assets/images/career.jpg';
import StickyWhatsApp from "../components/StickyWhatsapp";
import Chatbot from "../components/Chatbot";
import job from '../assets/data/Job';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewDetails = (job) => {
    setSelectedJob(selectedJob === job ? null : job); // Toggle selection
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  return (
    <>
      <StickyWhatsApp />
      <Chatbot />
      <div className="flex flex-col min-h-screen container mx-auto">
        <main className="flex-1">
          <section className="w-full py-12 md:py-20 lg:py-20">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl md:my-3 text-[#780604]">
                  Join Our Dynamic Team
                </h1>
                <p className="max-w-[600px] md:my-5 text-gray-700 md:text-xl lg:text-base xl:text-xl">
                  At Pioneer Venture, we're innovators, creators, and problem-solvers. We're a diverse team of professionals passionate about making a difference across multiple industries.
                </p>
                <Link
                  to="#openpos"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#05577D] px-8 text-md font-medium md:my-2 text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  View Open Positions
                </Link>
              </div>
              <img
                src={Care}
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-top sm:w-full lg:order-last"
              />
            </div>
          </section>

          <section className="w-full py-12 md:py-20 lg:py-20 bg-[#caf3fc]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-[#016482] px-3 py-1 text-sm text-white">
                    Company Culture
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem]">
                    A Collaborative and Inclusive Environment
                  </h2>
                  <p className="max-w-[700px] text-gray-700 md:text-xl">
                    At Pioneer Ventures, we believe in fostering a culture of collaboration, innovation, and mutual respect. Our team members come from diverse backgrounds and work together to push the boundaries of what's possible.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#016482] text-white">
                    Benefits
                  </div>
                  <ul className="max-w-[700px] text-gray-700 md:text-xl list-disc mx-5">
                    <li className='my-2'>Collaborative and inclusive work environment</li>
                    <li className='my-2'>Opportunities for growth and professional development</li>
                    <li className='my-2'>Competitive compensation and benefits package</li>
                    <li className='my-2'>Flexible work arrangements and remote options</li>
                    <li className='my-2'>Make a real impact across multiple industries</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#016482] text-white">
                    Interview Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem]">
                    A Thorough and Fair Evaluation
                  </h2>
                  <p className="max-w-[700px] text-gray-700 md:text-xl">
                    Our interview process is designed to assess your skills, experience, and cultural fit. We'll start with a phone screen, followed by a technical interview, and then a final round of interviews with the hiring team. We're committed to providing a transparent and equitable process.
                  </p>
                  <p>
                    <span className='font-bold text-lg my-1 mt-9 text-[#780604]'>Mail Your CV For These Open Positions:</span>
                    <Link to={'mailto:hrpioneer0012@gmail.com'} className='font-bold text-blue-600 hover:underline'>
                      hrpioneer0012@gmail.com
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#016482] text-white">
                    Open Positions
                  </div>
                  <div className="grid gap-4" id='openpos'>
                    {job.map((job, index) => (
                      <div key={index} className="bg-[#CAF3FC] rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-bold">{job.title}</h3>
                            <p className="text-gray-700">
                              {truncateDescription(job.description, 20)}
                            </p>
                          </div>
                          <button
                            onClick={() => handleViewDetails(job)}
                            className="inline-flex items-center rounded-md bg-[#05577D] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                          >
                            {selectedJob === job ? 'Hide Details' : 'View Details'}
                          </button>
                        </div>
                        {/* Conditionally render job details in a popup */}
                        {selectedJob === job && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-md p-8 w-11/12 max-w-3xl h-4/5 overflow-y-auto">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-2xl font-extrabold">{job.title}</h4>
                                <button
                                  onClick={() => setSelectedJob(null)}
                                  className="text-gray-700 text-2xl font-extrabold text-red-700 hover:text-gray-900"
                                >
                                  X
                                </button>
                              </div>
                              <p className="text-gray-700">{job.description}</p>
                              <h1 className='font-bold text-lg my-3'>Skills Required:</h1>
                              <p className="text-gray-700">{job.skills}</p>
                              <h1 className='font-bold text-lg my-3'>Roles and Responsibilities:</h1>
                              <p className="text-gray-700">{job.role}</p>
                              <h1 className='font-bold text-lg my-3'>Essential Details:</h1>
                              <p className="text-gray-700">{job.location}</p>
                              <p className="mt-4">
                                <span className='font-bold text-lg text-[#780604]'>Apply by sending your CV to: </span>
                                <Link to={'mailto:hrpioneer0012@gmail.com'} className='font-bold text-blue-600 hover:underline'>
                                  hrpioneer0012@gmail.com
                                </Link>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Career;
