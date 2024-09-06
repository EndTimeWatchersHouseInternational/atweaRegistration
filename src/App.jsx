
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Slideshow from './Components/Slideshow/Slideshow';

function App() {

  const images = [
    'https://raw.githubusercontent.com/EndTimeWatchersHouseInternational/BackgroundImages/main/bg.jfif',
    'https://raw.githubusercontent.com/EndTimeWatchersHouseInternational/BackgroundImages/main/bg3.jfif',
    'https://raw.githubusercontent.com/EndTimeWatchersHouseInternational/BackgroundImages/main/bg2.jfif',
    'https://raw.githubusercontent.com/EndTimeWatchersHouseInternational/BackgroundImages/main/bg4.jfif',
    'https://raw.githubusercontent.com/EndTimeWatchersHouseInternational/BackgroundImages/main/bg5.jfif',
  
  ];



  return (
   
    <div className="app">
     <Slideshow images={images} duration={5000} />
     <Contact/>
     <Footer/>
    </div>
   
   
  )
}

export default App
