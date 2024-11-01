import WebApps from './WebApps';
import Designs from './Designs';
import weatherImage from '../assets/weather-dashboard.png';
import techBlogImage from '../assets/mvc-tech-blog.png';
import javascriptQuizImage from '../assets/javascript-quiz.png';
import nomadExperienceImage from '../assets/nomad-experience.png';
import singlePagePortfolioImage from '../assets/single-page-portfolio.png';
import auraRadioImage from '../assets/aura-radio.png';
import allHallowsEve from '../assets/designs/AllHallowsEve.jpg';
import rubinos70thAnniversary from '../assets/designs/rubinos70thAnniversary.jpg';
import pumpkinsAglow from '../assets/designs/FPC-PumpkinsAglowTee.jpg';
import tulaTaqueria from '../assets/designs/TulaTaqueria.jpg';
import motomentumRide from '../assets/designs/MotomentumRide.png';
import ohioWildflowers from '../assets/designs/OhioWildflowersFull.png';
import tinyTonicTees from '../assets/designs/TinyTonicTees.png';
import bubbleTonicStudios from '../assets/designs/BubbleTonicLogo.jpg';
import unusedPumpkinsAglow from '../assets/designs/PumpkinsAglowFinal.jpg';
import tonicLogoAnimationStill from '../assets/designs/TonicLogoAnimation.jpg';
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

const designs = [
  {
    title: "All Hallows' Eve",
    subtitle: "Custom Tee Design",
    description: "While working at Tonic Studios, I had the pleasure of coming up with Ohio History Connection's 2022 All Hallows' Eve tee design. Utilizing inspiration photos they sent and descriptions of the event, I was able to come up with this vintage style illustration. Drawn in Procreate and finishing touches in Adobe Illustrator.",
    image: allHallowsEve
  },
  {
    title: "Rubino's Pizza 70th Anniversary",
    subtitle: "Custom Tee Design",
    description: "One of my last projects while working at Tonic Studios was being able to create this custom design for Rubino's 70th Anniversary. A lot of their past designs included the owners, so I thought I'd include an illustration of the current owner with some 50s style elements. They also wanted to include some classic elements like their rotary phone (that still works!) and their phrase 'binos'. Drawn in Procreate and finishing touches in Adobe Illustrator.",
    image: rubinos70thAnniversary
  },
  {
    title: "Pumpkins Aglow",
    subtitle: "Custom Tee Design",
    description: "This design was with the same All Hallows' Eve client, just with a new company, Franklin Park Conservatory, and wanted a fun tee design for their 2023 Pumpkins Aglow event. They wanted to include some of their more popular attractions; singing pumpkins and a skeleton band while staying within their branding guidelines. Drawn in Procreate and finishing touches in Adobe Illustrator.",
    image: pumpkinsAglow
  },
  {
    title: "Tula Taqueria",
    subtitle: "Custom Tee Design",
    description: "One of my most memorable projects at Tonic Studios would have to be this design for Tula Taqueria. Working alongside another designer, we created this design from a concept of mirrored taco ingredients based on mexican floral designs. We also included some popular mexican flowers to mimic some mexican headdresses within the taco. The client loved it so much, they made it their branding! Designed and created in Adobe Illustrator.",
    image: tulaTaqueria
  },
  {
    title: "Motomentum",
    subtitle: "Custom Tee Design",
    description: "For this design, the client wanted a modern vintage style design based on their inspiration photos. Using a photo of one of their vehicles, I was able to create this custom design with their branding elements. Drawn in Procreate and finishing touches in Adobe Illustrator.",
    image: motomentumRide
  },
  {
    title: "Ohio Wildflowers",
    subtitle: "Custom Tee Design",
    description: "Tonic Studios has some custom tee designs that they sell periodically. For this particular design, another designer had a vision and I helped them implement it. Using some of Ohio's wildflowers, I was able to illustrate and layout the flowers to create depth within 'Ohio'. Designed and created in Adobe Illustrator.",
    image: ohioWildflowers
  },
  {
    title: "Tiny Tonic Tees",
    subtitle: "Handlettering",
    description: "This was a fun side project to promote some of Tonic Studios' services and products. I handlettered the back print of these Tiny Tonic Tees the old-fashioned way: pen and paper. Brought in Adobe Illustrator to help clean up.",
    image: tinyTonicTees
  },
  {
    title: "Bubble Tonic Studios",
    subtitle: "Handlettering",
    description: "As a secondary logo, another designer and myself came up with this fun design. Handlettered using pen and paper. Brought in Adobe Illustrator to help clean up.",
    image: bubbleTonicStudios
  },
  {
    title: "Unused Sketches",
    subtitle: "Illustrations",
    description: "These were either an unused sketch idea or an unused, fleshed out design. Sometimes you're just excited about a sketch or design that just unfortunately wasn't able to be used. Drawn in Procreate.",
    image: unusedPumpkinsAglow
  },
  {
    title: "Tonic Studios Logo Animation",
    subtitle: "Hand drawn animation",
    description: "I like to dabble in the world of animation every now and then and I thought I'd practice by doing a custom animation for the Tonic Studios logo. Hand drawn, frame-by-frame, I created a drip-by-drip reveal of the Tonic logo. Created in Procreate.",
    image: tonicLogoAnimationStill
  },
];

function Portfolio() {
  return (
    <Tab.Container defaultActiveKey="designs">
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
          <WebApps projects={projects} />
        </Tab.Pane>
        <Tab.Pane eventKey="designs">
          <Designs designs={designs} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
  
export default Portfolio;