import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentInputForm from './components/InputForm';
import StudentList from './components/StudentList';
import {Heading} from './components/Heading';

import { BrowserRouter as Router, Route, Switch ,Routes} from "react-router-dom";
import { EditStudent } from './components/EditStudent';
import { Home } from './components/Home';


function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        {/* <StudentInputForm/>
        <StudentList/> */}
        <Router>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/add' element={<StudentInputForm/>}/>
            <Route path='/edit/:id' element={<EditStudent/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
