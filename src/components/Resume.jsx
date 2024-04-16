import resumeFile from '../assets/UpdatedResume.jpg';
import resumePDF from '../assets/UpdatedResume.pdf';

function Resume() {
    return (
      <div className="container-fluid">
        <div className="mt-5 text-center">
          <a href={resumePDF} download="AshleighPfanderResume" target='_blank'>
            <button className="col-lg-2 col-12 p-3 gabarito-regular">Download Resume</button>
          </a>
          <img className="resume" src={resumeFile} alt="Ashleigh's Resume"></img>
        </div>
      </div>
    );
  }
  
  export default Resume;