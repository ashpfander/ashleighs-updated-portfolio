import Navigation from './Navigation';

function Header() {
  return (
  <header className="p-3">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="title kalam-bold pt-2">
        Ashleigh Pfander
      </h1>
      <Navigation />
    </div>
  </header>
  );
}

export default Header;