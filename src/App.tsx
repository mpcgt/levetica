import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react"
import NavBar from '../src/NewNavBar';
import '../src/index.css'
import Home from '../src/index';
import Products from './assets/images/tools';
import Articles from '../src/assets/routes/pages/news';
import About from '../src/assets/routes/pages/about';

const links = [
  { to: '/', text: 'Accueil' },
  { to: '/products', text: 'Produits' },
  { to: '/articles', text: 'Articles' },
  { to: '/about', text: 'À propos' },
];

const App = () => {
  return (
    <Router>
      <Analytics />
      <div className="header">
        <NavBar links={links} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;