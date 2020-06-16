import React, {Component} from 'react';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import home from './components/home';
import movies from './components/movies';
import games from './components/games';
import sports from './components/sports';
import about from './components/about';
import add from './components/add';
import loggedout from './test.png';
import toollogo from './typefacelogo.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <ul>
          <li><a href="/"><img src={toollogo} alt = "log"/></a></li>  
          <li><textlink><a href="/movies">Movie and TV Reviews</a></textlink></li>
          <li><textlink><a href="/games">Game Reviews</a></textlink></li>
          <li><textlink><a href="/sports">Sports Talk</a></textlink></li>
          <li><textlink><a href="/about">About Us</a></textlink></li>
          <li style = {{float: 'right'}}><a href="/login"><img src={loggedout} alt ="loggedout" /></a></li>
      </ul>
      <Route path = "/" exact component = {home} />
      <Route path = "/movies" exact component = {movies} />
      <Route path = "/games" exact component = {games} />
      <Route path = "/sports" exact component = {sports} />
      <Route path = "/about" exact component = {about} />
      <Route path = "/newarticle" exact component ={add} />
      </header>
    </div>
    </Router>
  );
}
}

export default App;
