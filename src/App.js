import React from 'react';
import TopNav from './components/topnav/topNav';
import MainNav from './components/mainNav/mainNav';
import CatPage from './components/CatPage/CatPage';

import Index from './components/index/index';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NewsLetter from './components/NewsLetter/NewsLetter';
import { BrowserRouter, Route } from 'react-router-dom';






function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <MainNav />
      <Route exact path='/' component={Index} />
      <Route path='/contact' component={Contact} />
      <Route path='/catpage' component={CatPage} />
      <NewsLetter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
