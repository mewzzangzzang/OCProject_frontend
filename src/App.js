import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import Chart from './content/Chart';
import Main from './content/main'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path =  "/" element = {<Main />} />
          <Route path =  "/chart" element = {<Chart />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
