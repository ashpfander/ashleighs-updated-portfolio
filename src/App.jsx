import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import PersonalLogoOlive from '../src/assets/designs/PersonalLogo-Olive.png';

function App() {
  const [logo, setLogo] = useState(PersonalLogoOlive);

  return (
    <div>
      <Header logo={logo}/>
      <div className="container">
        <Outlet context={{ setLogo }}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;