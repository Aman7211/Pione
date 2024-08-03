import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About';
import Services from './pages/Services';
// import Career from './pages/Career';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import Investment from './pages/Investment';
import Media from './components/ServiceComponent/Media';
import Construction from './components/ServiceComponent/Construction';
import Food from './components/ServiceComponent/Food';
import Health from './components/ServiceComponent/Health';
import IT from './components/ServiceComponent/IT';
import MediaDistribution from './components/ServiceComponent/MediaDistribution';
import Renewable from './components/ServiceComponent/Renewable';
import RealEstate from './components/ServiceComponent/RealEstate';

function App() {
  return (
   <>
   <Header/>
  <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    {/* <Route path='/career' element={<Career/>} /> */}
    <Route path='/contact' element={<Contact/>} />  
    <Route path='/investment' element={<Investment/>} />
    <Route path='/media' element={<Media/>} />
    <Route path='/construction' element={<Construction/>} />
    <Route path='/food' element={<Food/>} />
    <Route path='/health' element={<Health/>} />
    <Route path='/it' element={<IT/>} />
    <Route path='/mediadistribution' element={<MediaDistribution/>} />
    <Route path='/renew' element={<Renewable/>} />
    <Route path='/real' element={<RealEstate/>} />

  </Routes>

<Footer/> 

   </>
  );
}

export default App;
