import { Route, BrowserRouter, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Chart from "./content/chart";
import Main from "./content/main";
import Chart2 from "./content/chart2";
import Chart3 from "./content/chart3";
import Navbar from "./layout/navbar";
import Page2 from "./content/page2";
import Page3 from "./content/page3";
import Page4 from "./content/page4";
import Test from "./content/test";

import GoogleTrendsWidget from "./content/GoogleTrendsWidget ";

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
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Google" element={<GoogleTrendsWidget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
