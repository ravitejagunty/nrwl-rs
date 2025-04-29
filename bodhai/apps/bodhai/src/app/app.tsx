import * as React from 'react';
import NxWelcome from './nx-welcome';
import Search from './components/Search'
import { Link, Route, Routes } from 'react-router-dom';

const Contact = React.lazy(() => import('contact/Module'));
const Aboutus = React.lazy(() => import('aboutus/Module'));
const Models = React.lazy(() => import('models/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/models">Models</Link>
        </li>
      </ul>
      <Search/>
      <Routes>
        <Route path="/" element={<NxWelcome title="bodhai" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
