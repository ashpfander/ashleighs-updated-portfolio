import resumeFile1 from '../assets/AshleighPfander-UpdatedResume1.png';
import resumeFile2 from '../assets/AshleighPfander-UpdatedResume2.png';
import resumePDF from '../assets/AshleighPfander-UpdatedResume.pdf';

function Resume() {
    return (
      <div className="container-fluid">
        <div className="mt-5 text-center footer-padding">
          <a href={resumePDF} download="AshleighPfanderResume" target='_blank'>
            <button className="col-lg-2 col-12 p-3 gabarito-regular">Download Resume</button>
          </a>
          <img className="resume" src={resumeFile1} alt="Ashleigh's Resume - First Page"></img>
          <img className="resume" src={resumeFile2} alt="Ashleigh's Resume - Second Page"></img>
        </div>
      </div>
    );
  }
  
  export default Resume;