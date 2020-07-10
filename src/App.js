import React, { Component } from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navNfooter/nav';
import Footer from './components/navNfooter/footer';
import Home from './components/Home/home';
import Service from './components/Services/Service';
import Blog from './components/Blog/blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Post from './components/Post/Post';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Service} />
          <Route path="/Blogs" component={Blog} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/post/:post_id" component={Post} />
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;