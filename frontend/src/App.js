import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bgp from './bgp.jpg';

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100" style={{backgroundImage: `url(${bgp}`}}>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={BooksList}/>
      <Route path="/edit/:id" component={EditBook}/>
      <Route path="/create" component={CreateBook}/>
      </div>
      </div>
    </Router>
  );
}

export default App;
