import ashleighPhoto from '../assets/ashleigh-photo.jpeg';

function AboutMe() {
    return (
        <div className="container-fluid gabarito-regular d-flex pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-12">
          <img className="profile-pic me-4 mb-4" src={ashleighPhoto} alt="Photo of Ashleigh"></img>
          </div>
          <div className="col-lg-9 col-md-12 footer-padding">
            <h2 className="gotu-regular olive-text">Hi! I'm Ashleigh.</h2>
            <p>I am a Graphic Designer, Illustrator, and most recently added Full-Stack Developer to my plate.
            I mainly focus on typography, handlettering, cartoon/vintage style illustrations, and love doing Front-End Development. </p>
            <p>I left my job as a Graphic Designer at a screen printing shop in May 2024 to focus on pursuing a career in coding.
            I originally acquired a Bachelor's Degree in Advertising & Graphic Design at CCAD.
            After spending roughly 6 years at my company doing various graphic design work, I wanted a change.
            After some thought into what other career path I could take, I remembered that I originally had wanted to be a Web Developer/Designer when I was much younger.
            Not wanting to go back to another 4 year college, I discovered bootcamps and read that they are just as good as getting a degree.
            I had some of the most fun learning how to code, but realized that I really need to practice my skills more before jumping into the career field.
            After spending a good amount of the Summer and part of Fall not working, I also realized I missed doing design work.
            I'm hoping I can land another awesome design job while also being able to learn more coding skills and be able to utilize them in the future.</p>
            <p>In my freetime, I love spending time with my husband, son, and two puppies. I also enjoy playing video games, watching shows and movies, coming up with a million things to do to my house, and napping (when I can).</p>
          </div>
          </div>
        </div>
    );
  }
  
  export default AboutMe;