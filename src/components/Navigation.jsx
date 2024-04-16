import { Link, useLocation } from 'react-router-dom';

// Create a function called Navigation to export to the Header
function Navigation() {
  // Create variable for the current page the user is on
  const currentPage = useLocation().pathname;

  // Returns the HTML coding for the navigation links
  return (
    <ul className="nav gabarito-regular fs-5 row">
      <li className="nav-item col-md-12 col-lg" data-bs-dismiss="offcanvas">
        <Link to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
      </li>
      <li className="nav-item col-md-12 col-lg" data-bs-dismiss="offcanvas">
        <Link to="/AboutMe"
          // Check to see if the currentPage is `About`, and if so we use the active link class. Otherwise, we set it to a regular link class.
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>
          About Me
        </Link>
      </li>
      <li className="nav-item col-md-12 col-lg" data-bs-dismiss="offcanvas">
        <Link to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class. Otherwise, we set it to a regular link class.
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item col-md-12 col-lg" data-bs-dismiss="offcanvas">
        <Link to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class. Otherwise, we set it to a regular link class.
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
      <li className="nav-item col-md-12 col-lg" data-bs-dismiss="offcanvas">
        <Link to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class. Otherwise, we set it to a regular link class.
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;