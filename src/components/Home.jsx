import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();


  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const title = document.querySelector('.title');
    const offcanvasButton = document.querySelector('.navbar');
    // Sets the header text color based on path
    const getHeaderColor = () => {
      if (location.pathname === '/') {
        title.classList.add('title-home'); // Sets this class for the home path
        links.forEach(link => {
          link.classList.add('nav-link-home')
        });
        document.querySelector('header').style.borderBottom = 'none';
        offcanvasButton.classList.remove('navbar-light');
        offcanvasButton.classList.add('navbar-dark');
      } else {
        title.classList.remove('title-home'); // Removes this class on other pages
        links.forEach(link => {
          link.classList.remove('nav-link-home')
        });
        document.querySelector('header').style.borderBottom = '1px solid #80804d';
        offcanvasButton.classList.remove('navbar-dark');
        offcanvasButton.classList.add('navbar-light');
      }
    };

    getHeaderColor();

    return () => {
      // Reset classes when component unmounts
      title.classList.remove('title-home');
      links.forEach(link => {
        link.classList.remove('nav-link-home');
      });
      document.querySelector('header').style.borderBottom = '';
      offcanvasButton.classList.remove('navbar-light');
      offcanvasButton.classList.remove('navbar-dark');
    };
  }, [location]);

  return (
    <div className="custom-container">
      <div className="background-image">
        <div className="col-lg-5 col-8 floating-box pt-4 ps-4 pe-4 pb-3">
          <h2 className="gotu-regular"><b>Hello!</b> My name is <b>Ashleigh Pfander</b>.</h2>
          <h4 className="gotu-regular typewriter-effect">
            <Typewriter
              options={{
                strings: ['Mom', 'Graphic Designer', 'Illustrator', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;