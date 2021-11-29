import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sortiment from "./pages/Sortiment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/sortiment" element={<Sortiment  />} />
      </Routes>
    </Router>
  );
}

export default App;
