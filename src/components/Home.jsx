import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();


  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const title = document.querySelector('.title');
    // Sets the header text color based on path
    const getHeaderColor = () => {
      if (location.pathname === '/') {
        title.classList.add('title-home'); // Sets this class for the home path
        links.forEach(link => {
          link.classList.add('nav-link-home')
        });
        document.querySelector('header').style.borderBottom = 'none';
      } else {
        title.classList.remove('title-home'); // Removes this class on other pages
        links.forEach(link => {
          link.classList.remove('nav-link-home')
        });
        document.querySelector('header').style.borderBottom = '1px solid #80804d';
      }
    };

    getHeaderColor();

    return () => {
      title.classList.remove('title-home'); // Reset class when component unmounts
      links.forEach(link => {
        link.classList.remove('nav-link-home');
      });
      document.querySelector('header').style.borderBottom = '';
    };
  }, [location]);

  return (
    <div className="custom-container">
      <div className="background-image">
        <div className="floating-box pt-4 ps-4 pe-4 pb-3">
          <h2 className="gotu-regular"><b>Hello!</b> My name is <b>Ashleigh Pfander</b>.</h2>
          <p className="gabarito-regular typewriter-effect">I am a(n)&nbsp;
            <Typewriter
              options={{
                strings: ['Mom', 'Graphic Designer', 'Illustrator', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;