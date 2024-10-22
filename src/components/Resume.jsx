import resumeFile from '../assets/AshleighPfander-Resume.png';
import resumePDF from '../assets/AshleighPfander-Resume.pdf';

function Resume() {
    return (
      <div className="container-fluid">
        <div className="mt-5 text-center footer-padding">
          <a href={resumePDF} download="AshleighPfanderResume" target='_blank'>
            <button className="col-lg-2 col-12 p-3 gabarito-regular">Download Resume</button>
          </a>
          <img className="resume mt-5 mb-4" src={resumeFile} alt="Ashleigh's Resume"></img>
        </div>
      </div>
    );
  }
  
  export default Resume;