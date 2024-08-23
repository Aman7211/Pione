import React from 'react'
import { Link } from 'react-router-dom'
import Care from '../assets/images/career.jpg';
import StickyWhatsApp from "../components/StickyWhatsapp";
import Chatbot from "../components/Chatbot";

const Career = () => {
 

  return (
    <>
    <StickyWhatsApp/>
    <Chatbot/>
    <div className="flex flex-col min-h-[100dvh] container mx-auto">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-20">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#780604]">
                Join our team and shape the future of technology
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Pioneer Ventures, we're building the next generation of innovative products that are transforming industries.
                Come be a part of our mission.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#05577D] px-8 text-md  font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
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
        <section className="w-full py-12 md:py-20 lg:py-20 bg-[#caf3fc] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#016482] px-3 py-1 text-sm text-white">
                  Company Culture
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  A collaborative and inclusive environment
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed">
                  At Pioneer Ventures, we believe in fostering a culture of collaboration, innovation, and mutual respect. Our
                  team members come from diverse backgrounds and work together to push the boundaries of what's
                  possible.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#016482] text-white">Benefits</div>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed ">
                  We offer a comprehensive benefits package to support our team members, including competitive salaries,
                  health insurance, retirement plans, and generous paid time off. We also provide opportunities for
                  professional development and growth.
                </p>
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
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  A thorough and fair evaluation
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed ">
                  Our interview process is designed to assess your skills, experience, and cultural fit. We'll start
                  with a phone screen, followed by a technical interview, and then a final round of interviews with the
                  hiring team. We're committed to providing a transparent and equitable process.
                </p>
                <p>
                  <p className='font-bold text-lg my-1 mt-9 text-[#780604] '>Mail Your Cv For these Open Position : </p>
                  <Link to={'mailto:hrpioneer0012@gmail.com'} className='pointer font-bold'>
                  hrpioneer0012@gmail.com
                  </Link>
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#016482] text-white">
                  Open Positions
                </div>
                <div className="grid w-full gap-4">
                  <div className="bg-[#CAF3FC]  rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold">Software Engineer</h3>
                        <p className="text-gray-700 ">
                          Build cutting-edge web applications using the latest technologies.
                        </p>
                      </div>
                      {/* <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#05577D] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link> */}
                    </div>
                  </div>
                  <div className="bg-[#CAF3FC] dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold">Product Manager</h3>
                        <p className="text-gray-700">
                          Define and execute the product roadmap for our innovative solutions.
                        </p>
                      </div>
                      {/* <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#05577D] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link> */}
                    </div>
                  </div>
                  <div className="bg-[#CAF3FC] dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold">UI/UX Designer</h3>
                        <p className="text-gray-700">
                          Craft intuitive and visually stunning user experiences.
                        </p>
                      </div>
                      {/* <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#05577D] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link> */}
                    </div>
                  </div>
                  <div className="bg-[#CAF3FC] dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold">Data Analyst</h3>
                        <p className="text-gray-700 ">
                          Uncover insights and drive data-driven decision making.
                        </p>
                      </div>
                      {/* <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#05577D] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
    </>
  )
}

export default Career





