import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  useEffect(() => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    const showDropdown = () => {
      dropdownContent.style.display = 'block';
    };

    const hideDropdown = () => {
      dropdownContent.style.display = 'none';
    };

    dropdown.addEventListener('mouseenter', showDropdown);
    dropdown.addEventListener('mouseleave', hideDropdown);

    return () => {
      dropdown.removeEventListener('mouseenter', showDropdown);
      dropdown.removeEventListener('mouseleave', hideDropdown);
    };
  }, []);

  return (
    <div style={{
      backgroundImage: "url('/image/space.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column"
    }}>
      <header style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 5%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(5px)",
        width: "100%"
      }}>
        <a href="#" style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "white",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          marginBottom: "10px"
        }}>The Root</a>
        <nav>
          <ol style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            listStyle: "none",
            gap: "20px",
            margin: 0,
            padding: 0
          }}>
            <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
            <li className="dropdown" style={{ position: "relative" }}>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>Programs</a>
              <div className="dropdown-content" style={{
                display: "none",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                minWidth: "160px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                zIndex: 1,
                borderRadius: "5px",
                padding: "10px 0"
              }}>
                <Link to="/education" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>Education</Link>
                <Link to="/culture" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>Culture</Link>
                <Link to="/healthcare" style={{ color: "white", padding: "12px 16px", textDecoration: "none", display: "block" }}>Health Care</Link>
              </div>
            </li>
            <li><Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</Link></li>
            <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
          </ol>
        </nav>
      </header>

      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 5%",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: "15px",
        margin: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
      }}>
        <h1>Healthcare Programs</h1>
        <p>
          Our healthcare programs focus on providing access to essential health services and education.
          We aim to improve the overall health and well-being of our community through various initiatives.
        </p>
      </main>

      <footer style={{
        width: "100%",
        padding: "20px 0",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        marginTop: "auto",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.8)"
      }}>
        <p>© 2025 The Root. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Healthcare;
    