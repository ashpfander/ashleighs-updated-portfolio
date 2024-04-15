import resumeFile from '../assets/UpdatedResume.pdf';
import { Document, Page } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";

function Resume() {
    return (
      <div className="container-fluid">
        <Document file={resumeFile}>
          <Page className="resume" pageIndex={0} />
        </Document>
      </div>
    );
  }
  
  export default Resume;