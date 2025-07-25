import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "./App.css";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The App component sets up the main application routing using React Router.
 * It defines three routes: the home page ("/"), login page ("/login"), and
 * contact page ("/contact"), each rendering their respective components.
 */

/*******  20458a94-f224-48c5-8210-b5e1fb8f8ae3  *******/ function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
