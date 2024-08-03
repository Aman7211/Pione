import React from 'react';
import tree from '../assets/images/tree video.gif';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mb-12">
        <section className="w-full py-12 md:py-0 lg:py-0 abc">
          <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 lg:py-32">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Pioneer Ventures
              </h1>
              <p className="text-muted-foreground md:text-xl">
              Where innovation meets opportunity
              </p>
              <p className="my-5 bg-black bg-opacity-90 p-5 mx-1 text-white">
                About Us
              </p>
            </div>
            <div className="md:pt-20">
              <img src={tree} alt="growing business" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center my-3 space-y-4 container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Who we are
          </h2>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          Welcome to Pioneer Ventures, where innovation meets opportunity across multiple industries. Founded on the principles of evolving spirit and forward-thinking, Pioneer Ventures is an amalgam dedicated to driving growth and transformation in diverse sectors including:
          <ul className='my-3'>
<li className='my-1'>	<strong>Media:</strong> <br/>Shaping narratives and engaging audiences through cutting-edge content creation and distribution.</li>
<li className='my-1'>	<strong>Construction:</strong> <br/>Building the future with sustainable practices and visionary architecture.</li>
<li className='my-1'>	<strong>F&B (Food & Beverage):</strong> <br/>Crafting culinary experiences that delight and nourish.</li>
<li className='my-1'>	<strong>Healthcare:</strong><br/>Advancing wellness and healthcare solutions through innovation and compassion.</li>
<li className='my-1'>	<strong>IT (Information Technology):</strong> <br/>Empowering businesses with digital solutions and technological advancements.</li>
<li className='my-1'>	<strong>Media Distribution:</strong> <br/>Connecting global audiences through seamless content delivery and strategic partnerships.</li>
<li className='my-1'>	<strong>Renewable Energy:</strong><br/>Renewable Energy: Leading the charge towards a sustainable future with renewable energy solutions.</li>
<li className='my-1'>	<strong>Real Estate:</strong><br/> Creating spaces that inspire and endure, enriching communities and lifestyles.</li>
</ul>
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          At Pioneer Ventures, our mission is to pioneer new possibilities in each sector we operate in, driven by a commitment to innovation, sustainability, and excellence. Our diversified expertise enables us to navigate complexities and seize opportunities, delivering value and shaping industries globally.
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          The major focus of Pioneer Ventures is on the principles of integrity, collaboration, and forward-thinking, we foster a culture that values creativity, diversity, and continuous improvement. Through strategic partnerships and a relentless pursuit of excellence, we aim to make a positive impact on society and create lasting value for our stakeholders.
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          Join us on our journey to redefine the future of industries, explore new frontiers, and create sustainable solutions that enrich lives. Discover Pioneer Ventures – where innovation meets opportunity.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
