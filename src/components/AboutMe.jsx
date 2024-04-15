import ashleighPhoto from '../assets/ashleigh-photo.jpeg';

function AboutMe() {
    return (
        <div className="gabarito-regular d-flex pt-5">
          <img className="profile-pic me-4" src={ashleighPhoto} alt="Photo of Ashleigh"></img>
          <div>
            <h2 className="kalam-bold olive-text">Hi! I'm Ashleigh.</h2>
            <p>I am in a bootcamp course to learn Full Stack Web Development.</p>
            <p>I currently work as a Graphic Designer at a screen printing shop. I originally acquired a Bachelor's Degree in Advertising & Graphic Design at CCAD.
            After spending 6 years at my company doing various graphic design work, I've come to the realization that this doesn't interest me anymore.
            After some thought into what other career path I could take, I remembered that I originally had wanted to be a Web Developer/Designer when I was much younger.
            Not wanting to go back to another 4 year college, I discovered bootcamps and read that they are just as good as getting a degree.
            So far, I am really enjoying the front-end development aspect, but am open to other Web Development opportunities that may arise.</p>
            <p>In my freetime, I love spending time with my husband, son, and two puppies. I also enjoy playing video games, watching shows and movies, coming up with a million things to do to my house, and napping (when I can).</p>
          </div>
        </div>
    );
  }
  
  export default AboutMe;