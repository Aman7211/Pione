
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
import LayoutGrid from "../components/ui/layout-grid";
// import banner from '../assets/images/banner.mp4'
import Card from "../components/card/Card";
import approach from '../assets/images/arrowe.png';
import b1 from '../assets/images/b1.png';
import { Link } from "react-router-dom";
import mediaimg from '../assets/images/21.jpeg';
import constructionimg from '../assets/images/22.jpeg';
import foodimg from '../assets/images/23.jpeg';
import healthimg from '../assets/images/24.jpeg';
import itimg from '../assets/images/25.jpeg';
import disimg from '../assets/images/26.jpeg';
import renewimg from '../assets/images/27.jpeg';
import realimg from '../assets/images/28.jpeg';

const Home = () => {

  const data =[
{image:"https://img.freepik.com/free-photo/glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033.jpg?t=st=1719040686~exp=1719044286~hmac=25a1ed20b056110d01005fe728bed29e60bcd7b8052397b2d146cfd624c70b4b&w=1060",
  heading:"Innovation",
  paragraph:"We believe in embracing new ideas and technologies."
},
{image:"https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003787.jpg?t=st=1719040766~exp=1719044366~hmac=97fc6ff432a475ed384c44ba2b58c20e5bf79d596d7348ec232c3c117f356e0d&w=900",
  heading:"Integrity",
  paragraph:"We also focus on building trust through transparency and honesty."
},
{image:"https://img.freepik.com/free-photo/3d-gemstones-fire-with-flames_23-2151073706.jpg?t=st=1719040801~exp=1719044401~hmac=02237977632612aadd2b5981c0e468ecee4543a4a5756f40d9d0b3f41afa159f&w=740",
  heading:"Impact",
  paragraph:"Creating meaningful change for our portfolio companies and society"
}
  ]  ;

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Media</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Shaping narratives and engaging audiences through cutting-edge content creation and distribution.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Constructions</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Building the future with sustainable practices and visionary architecture.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Food & Beverages</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Crafting culinary experiences that delight and nourish.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">HealthCare</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Advancing wellness and healthcare solutions through innovation and compassion.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Information Technology</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Empowering businesses with digital solutions and technological advancements.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Media Distribution</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Connecting global audiences through seamless content delivery and strategic partnerships.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Renewable Energy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Leading the charge towards a sustainable future with renewable energy solutions.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Real Estate</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Creating spaces that inspire and endure, enriching communities and lifestyles.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: mediaimg},
   {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: constructionimg},
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: foodimg},
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: healthimg},
    {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: itimg},
     {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: disimg},
     {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail: renewimg},
   {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-1",
    thumbnail: realimg},
  ];
  return (
    <>
    <div className=" relative w-full ">
      <img src={b1} alt="" />
      {/* <video src={banner}
      autoPlay
      loop
      muted
      className="z-0"
      ></video> */}
    </div>
    {/* <div className="absolute z-10 top-[150px] md:top-[200px] font-serif text-center tracking-wider text-xl md:text-3xl font-medium bg-[rgba(0,0,0,0.5)] md:bg-[rgba(0,0,0,0.2)] text-white w-full">
    Where innovation meets opportunity.
</div> */}


    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
        <div className="flex justify-center my-2 md:my-3 ">
<p className="md:text-3xl text-xl font-bold">Future of Innovations & Growths </p>
    </div>
     {/* all content of home page */}
<div  className="text-lg text-center md:mx-[110px] ">
At Pioneer Ventures, our mission is to pioneer new possibilities in each sector we operate in, driven by a commitment to innovation, sustainability, and excellence. Our diversified expertise enables us to navigate complexities and seize opportunities, delivering value and shaping industries globally.
</div>

    </motion.div>
    </AuroraBackground>



    {/* <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid> */}

          {/* card hover effec t sectioon */}
          <div className="flex justify-center items-center">
  <div className="my-5">
    {/* <p className="text-center text-2xl md:text-3xl font-bold mb-3 md:my-6">Our Core Values</p> */}
    <Card data={data} />
  </div>
</div>

<div>


<div className="md:mt-9">
<AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <p className="text-xl md:text-3xl font-bold mt-[90px] md:my-5 md:mt-[-40px]">Our Values</p>

  <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* <div className="text-center  my-3 ml-2 md:ml-[10px]">*/}
        
      {/* all content of home page */}
      <div className=" text-md md:text-lg font-medium mx-4 text-center">
        <p className="my-2 md:my-5 md:mt-0 ">
        At <span className="text-red-800">Pioneer Ventures,</span> we are dedicated to fostering innovation, integrity, and excellence across our diverse range of businesses. Our core values drive us to deliver exceptional quality and service in media, construction, real estate, food and beverages, healthcare, and beyond. We believe in the power of collaboration, sustainability, and community engagement, striving to have a positive impact on everything we do. Our commitment to ethical practices and continuous improvement ensures that we not only meet but exceed the expectations of our partners and stakeholders.
        </p>
      </div>
      <div className="w-[40%] md:w-[40%] flex justify-center md:justify-start">
        <img src={approach} alt="approach" className="w-full  md:w-[600px] h-auto" />
      </div>
    </div>
    </motion.div>
    </AuroraBackground>
</div>
<div className="">
<p className="text-center text-3xl font-bold mt-28 md:mt-6 my-2">Our Business Verticals</p>
    <div className=" md:h-[110vh] ">
      <LayoutGrid cards={cards} />
    </div>
</div>

</div>


<div className="my-4 md:mb-14 text-center">
  {/* contact us */}
  <p className="text-center text-3xl font-bold mt-6 my-2">Contact us</p>

  <div  className="text-lg text-center mx-3 md:mx-[110px] my-4">
  Ready to take the next step? We'd love to hear from you.
</div>
<Link to={'/contact'}>
<button className="text-white bg-blue-600 p-3 rounded my-4">
Connect Now
</button>
</Link>
</div>
  
    </>
  );
}



export default Home



