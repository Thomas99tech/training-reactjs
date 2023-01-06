import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Page2 from './page2';
import Page1 from './page1';
import Landing from './landing';
import Landing_mui from './landing_mui';
import AboutMe from './about-me/about-me';
import PageProject from './project/project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/page/1" element={<Page1 />}></Route>
      <Route path="/page/2" element={<Page2 />}></Route>
      <Route path="/page/:pageId"></Route>
      <Route path="/" element={<AboutMe />}></Route>
      <Route path="/aboutme/project" element={< PageProject/>}></Route>
      <Route path='/mui' element={<Landing_mui />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
