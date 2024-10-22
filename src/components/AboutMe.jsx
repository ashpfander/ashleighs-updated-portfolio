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
            <p>I am a recent Full Stack Web Development Bootcamp graduate with an interest in Front End Developing based on my past design experience. Eventually, I would love to get into the game developing world.</p>
            <p>I recently left my job as a Graphic Designer at a screen printing shop to focus on pursuing a career in coding.
            I originally acquired a Bachelor's Degree in Advertising & Graphic Design at CCAD.
            After spending roughly 6 years at my company doing various graphic design work, I've come to the realization that this doesn't interest me anymore.
            After some thought into what other career path I could take, I remembered that I originally had wanted to be a Web Developer/Designer when I was much younger.
            Not wanting to go back to another 4 year college, I discovered bootcamps and read that they are just as good as getting a degree.
            Now that I have finished my course, I'm excited and eager to get into the world of coding!</p>
            <p>In my freetime, I love spending time with my husband, son, and two puppies. I also enjoy playing video games, watching shows and movies, coming up with a million things to do to my house, and napping (when I can).</p>
          </div>
          </div>
        </div>
    );
  }
  
  export default AboutMe;