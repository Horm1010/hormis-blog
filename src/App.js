import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ProjectList from "./components/ProjectList.component";
import AddProject from "./components/AddProject.component";


function App() {
  return (
    <Router>
      <div className ="container">
      <Navbar />
      <br/>
      <Route path = "/" exact component= {ProjectList} />
      <Route path = "/add" component = {AddProject} />
      </div>
    </Router>

  );
}

export default App;
