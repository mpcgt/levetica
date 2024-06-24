import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { AnimatePresence } from "framer-motion"
import Navbar from '../src/assets/components/Navbar'
import FooterNew from '../src/assets/components/Footer'
import '../src/index.css'
import Home from '../src/index';
import Products from './assets/components/tools/tools';
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
import Add from '../src/assets/components/tools/pages/add'
import All from '../src/assets/components/tools/pages/all'
import Download from '../src/assets/components/tools/pages/download'
import Explore from '../src/assets/components/tools/pages/explore'
import Profile from '../src/assets/components/tools/pages/profile'
import Security from '../src/assets/components/tools/pages/security'
import Error from '../src/404'


const App = () => {
  return (
    <Router>
      <Analytics />
      <SpeedInsights />
      <div className="header">
        <Navbar />
        <AnimatePresence mode='wait' />
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
          <Route path="/add" element={<Add />} />
          <Route path="/all" element={<All />} />
          <Route path="/download" element={<Download/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </div>
      <FooterNew />
    <AnimatePresence />
    </Router>
  );
};

export default App;