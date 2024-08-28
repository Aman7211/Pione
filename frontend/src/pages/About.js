import React from 'react';
import tree from '../assets/images/tree video.gif';
import StickyWhatsApp from "../components/StickyWhatsapp";
import Chatbot from "../components/Chatbot";

const About = () => {
  return (
    <>
    <StickyWhatsApp/>
    <Chatbot/>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mb-12">
        <section className="w-full py-12 md:py-0 lg:py-0 abc">
          <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 lg:py-32">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
                Pioneer Ventures
              </h1>
              <p className="text-muted-foreground md:text-xl">
              Where innovation meets opportunity
              </p>
              <p className="my-5 bg-black rounded-sm bg-opacity-90 p-4 mx-1 text-white">
                About Us
              </p>
            </div>
            <div className="md:pt-20">
              <img src={tree} alt="growing business" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center my-3 space-y-4 container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl gradient-text">
            Who we are
          </h2>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          Welcome to Pioneer Ventures, where innovation meets opportunity across multiple industries. Founded on the principles of evolving spirit and forward-thinking, Pioneer Ventures is an amalgam dedicated to driving growth and transformation in diverse sectors including:
          <ul className='my-3'>
<li className='my-1'>	<strong>Media:</strong> <br/>We create and distribute cutting-edge content that captivates audiences and shapes narratives. Our media division is dedicated to innovative storytelling and immersive experiences.</li>
<li className='my-1'>	<strong>Construction:</strong> <br/>We build with a purpose, combining sustainable practices and visionary architecture to create structures that inspire and endure. Our construction division is committed to environmentally responsible building methods and iconic design.</li>
<li className='my-1'>	<strong>F&B (Food & Beverage):</strong> <br/>We craft culinary experiences that delight and nourish, bringing people together through the power of food. Our F&B division is passionate about creating memorable dining experiences and innovative cuisine.
</li>
<li className='my-1'>	<strong>Healthcare:</strong><br/>We deliver innovative and compassionate wellness solutions, improving lives through cutting-edge medical research and patient-centric care. Our healthcare division is dedicated to advancing wellness and healthcare outcomes.</li>
<li className='my-1'>	<strong>IT (Information Technology):</strong> <br/>We empower businesses with digital solutions, harnessing the power of technology to drive growth and transformation. Our IT division is committed to innovative software development and digital transformation.</li>
<li className='my-1'>	<strong>Media Distribution:</strong> <br/>We connect global audiences with seamless content delivery and strategic partnerships, making content accessible to all. Our media distribution division is dedicated to bridging the gap between content creators and consumers.</li>
<li className='my-1'>	<strong>Renewable Energy:</strong><br/>We lead the charge towards a sustainable future, pioneering renewable energy solutions that reduce our carbon footprint and promote energy independence. Our renewable energy division is committed to a greener tomorrow.</li>
<li className='my-1'>	<strong>Real Estate:</strong><br/> We create inspiring and enduring spaces, developing vibrant communities and innovative properties that enrich lives. Our real estate division is dedicated to building lasting legacies and thriving communities.</li>
</ul>
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          At Pioneer Ventures, we pioneer new possibilities across sectors with innovation, sustainability, and excellence. We harness diverse expertise to navigate complex challenges, seize opportunities, and deliver tangible value. Guided by integrity, collaboration, and forward-thinking, we foster a culture of creativity, diversity, and continuous improvement. Through strategic partnerships, we aim to positively impact society, create lasting value, build trust, and establish long-term relationships founded on transparency, reliability, and mutual respect.
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
          Join us on our journey to redefine the future of industries, explore new frontiers, and create sustainable solutions that enrich lives. Discover Pioneer Ventures – where innovation meets opportunity.
          </p>
        </div>
      </main>
    </div>
    </>
  );
};

export default About;
