import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => <div className="content">Welcome to the Home Page</div>;
const AboutUs = () => <div className="content">This is the About Us Page</div>;
const ContactUs = () => <div className="content">Contact Us Here</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <footer className="footer">© 2024 Your Company Name</footer>
      </div>
    </Router>
  );
}

export default App;