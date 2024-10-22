import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className="custom-container">
      <div className="background-image">
        <div className="floating-box pt-4 ps-4 pe-4 pb-3">
          <h2 className="gotu-regular"><b>Hello!</b> My name is <b>Ashleigh Pfander</b>.</h2>
          <p className="gabarito-regular typewriter-effect">I am a(n)&nbsp;
            <Typewriter
              options={{
                strings: ['mom', 'Graphic Designer', 'Illustrator', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;