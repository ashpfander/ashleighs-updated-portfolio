import Navigation from './Navigation';

function Header() {
  return (
  <header className="p-3">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex align-items-center">
        <h1 className="title kalam-bold pt-2">
          Ashleigh Pfander
        </h1>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h2 className="offcanvas-title" id="offcanvasNavbarLabel">Ashleigh Pfander</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
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