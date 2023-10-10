import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Chart from "./content/chart";
import Main from "./content/main";
import Chart2 from "./content/chart2";
import Chart3 from "./content/chart3";
import Navbar from "./layout/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chart2" element={<Chart2 />} />
          <Route path="/chart3" element={<Chart3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
