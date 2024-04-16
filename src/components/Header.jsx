import Navigation from './Navigation';
import "bootstrap/js/src/offcanvas.js";

function Header() {
  return (
  <header className="p-3">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex align-items-center">
        <h1 className="title kalam-bold pt-2">
          Ashleigh Pfander
        </h1>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end justify-content-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h2 className="offcanvas-title kalam-bold text-white pt-2 ps-3" id="offcanvasNavbarLabel">Ashleigh Pfander</h2>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <hr className="border-white border-2"/>
          <div className="offcanvas-body justify-content-end">
            <Navigation />
          </div>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;