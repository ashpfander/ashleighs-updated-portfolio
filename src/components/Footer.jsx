import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

function Footer() {
    return (
      <footer className="p-2">
        <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center">
          <div className="footer-icons d-flex">
            <ul className="nav">
              <li className="nav-item col-sm">
                <a className="nav-link" href="https://github.com/ashpfander"><img src={githubLogo} alt="Github Logo" className='footer-img'/></a>
              </li>
              <li className="nav-item col-sm">
                <a className="nav-link" href="https://www.linkedin.com/in/ashleigh-pfander/"><img src={linkedinLogo} alt="LinkedIn Logo" className='footer-img'/></a>
              </li>
              <li className="nav-item col-sm">
                <a className="nav-link" href="https://www.instagram.com/createdby.ashleigh"><img src={instagramLogo} alt="Instagram Logo" className='footer-img'/></a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <ul className="nav gabarito-regular fs-5 text-center">
              <li className="footer-item">
                <p>ashmpfander@gmail.com</p>
              </li>
              <li className="footer-item">
                <p>937.684.1677</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;