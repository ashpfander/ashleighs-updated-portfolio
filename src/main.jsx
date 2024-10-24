import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import WebApps from './components/WebApps.jsx';
import Designs from './components/Designs.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/WebApps',
        element: <WebApps />,
      },
      {
        path: '/Designs',
        element: <Designs />
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
