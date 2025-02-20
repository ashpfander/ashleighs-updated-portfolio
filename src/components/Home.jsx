import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import PersonalLogoWhite from '../assets/designs/PersonalLogo-White.png';
import PersonalLogoOlive from '../assets/designs/PersonalLogo-Olive.png';

function Home() {
  const location = useLocation();
  const { setLogo } = useOutletContext();

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const offcanvasButton = document.querySelector('.navbar');
    // Sets the header text color based on path
    const getHeaderColor = () => {
      if (location.pathname === '/') {
        setLogo(PersonalLogoWhite);
        links.forEach(link => {
          link.classList.add('nav-link-home')
        });
        document.querySelector('header').style.borderBottom = 'none';
        offcanvasButton.classList.remove('navbar-light');
        offcanvasButton.classList.add('navbar-dark');
      } else {
        setLogo(PersonalLogoOlive);
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
      setLogo(PersonalLogoOlive);
      links.forEach(link => {
        link.classList.remove('nav-link-home');
      });
      document.querySelector('header').style.borderBottom = '';
      offcanvasButton.classList.remove('navbar-light');
      offcanvasButton.classList.remove('navbar-dark');
    };
  }, [location, setLogo]);

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