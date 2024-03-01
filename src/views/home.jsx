import { useLocation } from 'react-router-dom'
import video from '../assets/video.mp4'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const Home = () => {
  const location = useLocation();

  return (
    <div className="relative h-screen">
      {/* Background Video Container */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        {
        <video autoPlay loop muted className="w-screen h-screen object-fill">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
        }
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <Header loggedUser={location.state}/>
      </div>
      <Content />
      <Footer />
    </div>
  )
}

export default Home
