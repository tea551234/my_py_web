import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <div class="fixed-top" ><Header><Nav /></Header></div>
        <Menu />
        <Sidebar />
        <div class="fixed-bottom"><Footer /></div>

      </header>
    </div>
  );
}

export default App;
