import video from '../assets/gif.mp4'
import Header from './header';
import Content from './content';
import Footer from './footer';
const Background = () => {
    return (
    <div className='relative h-screen'>
      {/* Background Video Container */}
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]'>
        <video autoPlay loop muted className='w-screen h-screen object-fill'>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
      <Header/>
      </div>
      <Content/>
      <Footer/>
    </div>
    );
};

export default Background;