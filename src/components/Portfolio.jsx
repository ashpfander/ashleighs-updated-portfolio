import Project from './Project';
import weatherImage from '../assets/weather-dashboard.png';
import techBlogImage from '../assets/mvc-tech-blog.png';
import javascriptQuizImage from '../assets/javascript-quiz.png';
import nomadExperienceImage from '../assets/nomad-experience.png';
import singlePagePortfolioImage from '../assets/single-page-portfolio.png';
import auraRadioImage from '../assets/aura-radio.png';
import { Tab, Nav } from 'react-bootstrap';

const projects = [
  {
    title: "Aura Radio",
    subtitle: "Group Project: MERN Stack",
    description: "As a group, we came up with an idea for an app where a user can explore playlists based on moods. Once a user has signed up or logged in, they are given different mood cards and once clicked into, playlists are displayed.",
    image: auraRadioImage,
    link: "https://auraradio.onrender.com/",
    github: "https://github.com/ashpfander/AuraRadioNew",
  },
  {
    title: "Weather Dashboard",
    subtitle: "Server-Side API",
    description: "Built from scratch, this application utilizes a server-side API (OpenWeatherMap). Once a city has been searched, it will generate the current weather and the next 5-days forecast.",
    image: weatherImage,
    link: "https://ashpfander.github.io/weather-dashboard/",
    github: "https://github.com/ashpfander/weather-dashboard",
  },
  {
    title: "Tech Blog",
    subtitle: "Model-View-Controller",
    description: "This app was also built from scratch and utilizes the Model-View-Controller paradigm. Users can create, edit, and delete a post and also comment on other users' posts.",
    image: techBlogImage,
    link: "https://ash-mvc-tech-blog-326e7a6f5aa6.herokuapp.com/",
    github: "https://github.com/ashpfander/mvc-tech-blog",
  },
  {
    title: "Javascript Quiz",
    subtitle: "Web APIs",
    description: "Also being built from scratch, this application utilizes local storage and setInterval for a timer. It helps new coders test their javascript knowledge!",
    image: javascriptQuizImage,
    link: "https://ashpfander.github.io/javascript-fundamentals-quiz/",
    github: "https://github.com/ashpfander/javascript-fundamentals-quiz",
  },
  {
    title: "Nomad Experience",
    subtitle: "Group Project: Server-Side APIs",
    description: "For this group project, we chose two APIs to interact with each other and thus, we created Nomad Experience! I helped create the HTML, CSS, and calling on certain elements from the APIs. *Full Disclosure: The APIs now have CORS errors. So that page no longer is functioning. :( But I was pretty proud of it, so still wanted to include.*",
    image: nomadExperienceImage,
    link: "https://ryanmcelwee.github.io/The-Nomad-Experience/",
    github: "https://github.com/RyanMcElwee/The-Nomad-Experience",
  },
  {
    title: "Single Page Portfolio Site",
    subtitle: "HTML & CSS",
    description: "This page was built from scratch at the beginning of the course and helped me put together my new knowledge of HTML and CSS. It was my first application utilizing responsive web design.",
    image: singlePagePortfolioImage,
    link: "https://ashpfander.github.io/ashleighs-web-portfolio/",
    github: "https://github.com/ashpfander/ashleighs-web-portfolio",
  },
];

function Portfolio() {
  return (
    <Tab.Container defaultActiveKey="webapps">
      <Nav className="justify-content-center pt-5 tabs-pills">
        <Nav.Item>
          <Nav.Link className="p-3 webapps-tab text-center" eventKey="webapps">Web Apps</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-3 designs-tab text-center" eventKey="designs">Designs</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="webapps">
          <Project projects={projects} />
        </Tab.Pane>
        <Tab.Pane eventKey="designs">
          Placeholder
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
  
export default Portfolio;