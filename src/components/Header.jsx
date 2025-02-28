import Navigation from './Navigation';
import OffcanvasNavigation from './OffcanvasNavigation';
import "bootstrap/js/src/offcanvas.js";

function Header({ logo }) {
  return (
  <header className="p-1 ps-3">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center">
        <img
          src={logo}
          alt="Ashleigh Pfander"
          className='logo'
        />
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end justify-content-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h2 className="offcanvas-title gotu-regular text-white pt-2 ps-3" id="offcanvasNavbarLabel">Ashleigh Pfander</h2>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <hr className="border-white border-2"/>
          <div className="offcanvas-body justify-content-end">
            <OffcanvasNavigation />
          </div>
        </div>
        <div className="reg-nav">
            <Navigation />
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;