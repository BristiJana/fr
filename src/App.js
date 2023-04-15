import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Page1 from "./components/Page1";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f7efe5" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/next" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
