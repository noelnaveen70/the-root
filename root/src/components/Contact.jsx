import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Add hover effect for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent) {
          dropdownContent.style.display = 'block';
        }
      });
      
      dropdown.addEventListener('mouseleave', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent) {
          dropdownContent.style.display = 'none';
        }
      });
    });
    
    // Cleanup event listeners
    return () => {
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', () => {});
        dropdown.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/image/space.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column"
      }}
    >
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
              <a href="/education" style={{ 
                color: "white", 
                padding: "12px 16px", 
                textDecoration: "none", 
                display: "block"
              }}>Education</a>
              <a href="/culture" style={{ 
                color: "white", 
                padding: "12px 16px", 
                textDecoration: "none", 
                display: "block"
              }}>Culture</a>
              <a href="/healthcare" style={{ 
                color: "white", 
                padding: "12px 16px", 
                textDecoration: "none", 
                display: "block"
              }}>Health Care</a>
            </div>
          </li>
          <li><a href="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a></li>
          <li><Link to="/Contact" style={{ color: "white", textDecoration: "none", borderBottom: "2px solid white" }}>Contact</Link></li>
        </ol>
      </header>
      
      <main style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        padding: "50px 0",
        width: "100%"
      }}>
        <div style={{
          maxWidth: "1000px",
          width: "80%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          
          borderRadius: "15px",
          padding: "40px",
          color: "white",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          marginBottom: "50px"
        }}>
          <h1 style={{ 
            fontSize: "42px", 
            marginBottom: "30px", 
            textAlign: "center",
            letterSpacing: "2px",
            borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
            paddingBottom: "15px"
          }}>Contact Us</h1>
          
          <p style={{ 
            fontSize: "18px", 
            lineHeight: "1.8", 
            marginBottom: "40px",
            textAlign: "center"
          }}>
            Have questions or want to learn more about our programs? 
            Get in touch with us using the contact information below.
          </p>
    
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}>
            <div style={{
              flex: "1 1 300px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "30px",
              borderRadius: "12px",
              borderLeft: "4px solid #117a65",
              marginBottom: "30px"
            }}>
              <h3 style={{ marginBottom: "20px", color: "#e0e0e0", fontSize: "24px" }}>Our Address</h3>
              <p style={{ marginBottom: "20px", lineHeight: "1.8", fontSize: "16px" }}>
                <strong>The Root Foundation</strong><br />
                123 Innovation Street<br />
                Tech District<br />
                New York, NY 10001
              </p>
              <p style={{ marginBottom: "15px", fontSize: "16px" }}>
                <strong>Email:</strong> info@theroot.org
              </p>
              <p style={{ marginBottom: "15px", fontSize: "16px" }}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p style={{ fontSize: "16px" }}>
                <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST
              </p>
            </div>
            
            <div style={{
              flex: "1 1 300px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "30px",
              borderRadius: "12px",
              borderLeft: "4px solid #1a5276",
              marginBottom: "30px"
            }}>
              <h3 style={{ marginBottom: "20px", color: "#e0e0e0", fontSize: "24px" }}>Connect With Us</h3>
              <p style={{ lineHeight: "1.8", marginBottom: "25px", fontSize: "16px" }}>
                Follow us on social media to stay updated on our latest events, 
                programs, and initiatives. We're always looking for volunteers
                and partners who share our vision for community empowerment.
              </p>
              <div style={{ 
                display: "flex", 
                gap: "20px", 
                marginTop: "20px",
                justifyContent: "center" 
              }}>
                <a href="#" style={{ 
                  width: "45px", 
                  height: "45px", 
                  borderRadius: "50%", 
                  backgroundColor: "#3b5998", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>f</a>
                <a href="#" style={{ 
                  width: "45px", 
                  height: "45px", 
                  borderRadius: "50%", 
                  backgroundColor: "#1da1f2", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>t</a>
                <a href="#" style={{ 
                  width: "45px", 
                  height: "45px", 
                  borderRadius: "50%", 
                  backgroundColor: "#c32aa3", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>i</a>
                <a href="#" style={{ 
                  width: "45px", 
                  height: "45px", 
                  borderRadius: "50%", 
                  backgroundColor: "#ff0000", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>y</a>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "30px",
            borderRadius: "12px",
            marginTop: "20px",
            textAlign: "center"
          }}>
            <h3 style={{ marginBottom: "20px", color: "#e0e0e0", fontSize: "24px" }}>Visit Our Office</h3>
            <div style={{
              height: "300px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}>
              <p style={{ color: "#888", fontSize: "16px" }}>Map embed would appear here</p>
            </div>
            <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
              We're located in the heart of the Tech District, easily accessible by public transportation. 
              Feel free to drop by during our office hours for a cup of coffee and a chat about our programs!
            </p>
          </div>
        </div>
      </main>
      
      <footer style={{ 
        width: "100%", 
        padding: "20px 0", 
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(5px)",
        marginTop: "auto", 
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.8)"
      }}>
        <p>
          © 2025 The Root. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact; 