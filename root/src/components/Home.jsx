import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";

const Home = () => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent) {
          dropdownContent.style.display = "block";
        }
      });

      dropdown.addEventListener("mouseleave", () => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent) {
          dropdownContent.style.display = "none";
        }
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", () => {});
        dropdown.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="home-container">
      <span className="bg-img"></span>
      <img src="/image/mars.png" alt="Mars" className="mars" />
      <div className="container">
        <header className="header">
          <a href="#" className="logo">The Root</a>
          <ol className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li className="dropdown">
              <a href="#">Programs</a>
              <div className="dropdown-content">
                <a href="/education">Education</a>
                <a href="/culture">Culture</a>
                <a href="/healthcare">Health Care</a>
              </div>
            </li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ol>
        </header>
        <main>
          <h1>Welcome to Root.it</h1>
          <p>
            Root.it is a multi-faceted platform committed to empowering communities through
            education, culture promotion, and social services. We provide accessible resources
            for learning, celebrate cultural diversity, and support home care services for those in need.
          </p>
          <ol className="info">
            <li className="item">
              <h5>01</h5>
              <h4>Education</h4>
              <p>Empowering individuals with quality learning resources and skill development programs.</p>
            </li>
            <li className="item">
              <h5>02</h5>
              <h4>Culture Promotion</h4>
              <p>Celebrating and preserving heritage through cultural events and initiatives.</p>
            </li>
            <li className="item">
              <h5>03</h5>
              <h4>Social Service</h4>
              <p>Providing compassionate home care assistance for those in need.</p>
            </li>
          </ol>
        </main>
        <footer>
          <p>© 2025 The Root. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
