import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RequestList from "./pages/RequestList";
import EditRequest from "./pages/EditRequest";
import CreateRequest from "./pages/CreateRequest";



function App() {
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="" target="_blank">
                      <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                  </a>
                  <Link to="/" className="navbar-brand">PAIDED TIME OFF PORTAL</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Requests</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/create" className="nav-link">New Request</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br/>
              <Route path="/" exact component={RequestList} />
              <Route path="/edit/:id" component={EditRequest} />
              <Route path="/create" component={CreateRequest} />
          </div>
      </Router>
  );
}

export default App;
