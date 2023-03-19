import mainPage from "./pages/mainPage.jsx";
import Company from "./pages/Company.jsx";
import "./App.css";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<mainPage />} />
          <Route exact path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
