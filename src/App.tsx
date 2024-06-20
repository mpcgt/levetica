import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from '../src/assets/components/Navbar'
import Toasts from '../src/assets/components/toasts/toasts'
import '../src/index.css'
import Home from '../src/index';
import Products from '../src/assets/routes/pages/tools';
import Articles from '../src/assets/routes/pages/news';
import About from '../src/assets/routes/pages/about';
import Apps from '../src/assets/routes/pages/languages/apps'
import Angular from '../src/assets/routes/pages/languages/angular'
import CSS from '../src/assets/routes/pages/languages/css'
import HTML from '../src/assets/routes/pages/languages/html'
import JS from '../src/assets/routes/pages/languages/js'
import React from '../src/assets/routes/pages/languages/react'
import Reactn from '../src/assets/routes/pages/languages/reactn'
import TS from '../src/assets/routes/pages/languages/ts'
import Vue from '../src/assets/routes/pages/languages/vue'
import Tuto from '../src/assets/routes/pages/languages/tuto'

const App = () => {
  return (
    <Router>
      <Analytics />
      <SpeedInsights />
      <div className="header">
        <Navbar />
      <Toasts />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='/angular' element={<Angular />} />
          <Route path='/css' element={<CSS />} />
          <Route path='/html' element={<HTML />} />
          <Route path='/js' element={<JS />} />
          <Route path='/react' element={<React />} />
          <Route path='/reactn' element={<Reactn />} />
          <Route path='/ts' element={<TS />} />
          <Route path='/vue' element={<Vue />} />
          <Route path='/tuto' element={<Tuto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;