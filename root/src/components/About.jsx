import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
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
            <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>   </li>
            <li><Link to="/About" style={{ color: "white", textDecoration: "none", borderBottom: "2px solid white" }}>About</Link></li>
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
            <li><Link to="/Gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</Link></li>
            <li><Link to="/Contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
          </ol>
        </header>
        
        <main style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          padding: "20px 5%",
          width: "100%"
        }}>
          <div style={{
            maxWidth: "1000px",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
           
            borderRadius: "15px",
            padding: "40px",
            color: "white",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px"
          }}>
            <h1 style={{ 
              fontSize: "36px", 
              marginBottom: "30px", 
              textAlign: "center",
              letterSpacing: "2px",
              borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
              paddingBottom: "15px"
            }}>About Us</h1>
            
            <p style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              marginBottom: "40px",
              textAlign: "justify"
            }}>
              Root.it is a dedicated platform that fosters growth and development in three key areas:
              Education, Culture Promotion, and Social & Health Care. Our mission is to empower communities
              by providing accessible learning, preserving cultural heritage, and offering compassionate
              social and health services.
            </p>
      
            <h2 style={{ 
              fontSize: "32px", 
              marginBottom: "30px", 
              textAlign: "center",
              letterSpacing: "1px"
            }}>Our Core Activities</h2>
            
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "30px"
            }}>
              <div className="activity" style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                color: "#333",
                transition: "transform 0.3s ease",
                transform: "translateY(0)",
                cursor: "default"
              }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  marginBottom: "15px",
                  color: "#1a5276",
                  borderLeft: "4px solid #1a5276",
                  paddingLeft: "15px"
                }}>1. Education</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  We believe education is the foundation of growth. Our platform provides learning resources
                  in various disciplines, with a special emphasis on language education and understanding one's roots.
                  Through interactive courses and training, we enable individuals to enhance their knowledge and 
                  develop valuable skills.
                </p>
              </div>
              
              <div className="activity" style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                color: "#333",
                transition: "transform 0.3s ease",
                transform: "translateY(0)",
                cursor: "default"
              }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  marginBottom: "15px",
                  color: "#117a65",
                  borderLeft: "4px solid #117a65",
                  paddingLeft: "15px"
                }}>2. Culture Promotion</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  Cultural heritage is at the heart of our identity. Root.it promotes and preserves cultural 
                  diversity through educational programs, interactive events, and community-driven activities.
                  We provide opportunities for individuals to learn about their heritage, participate in cultural
                  exchanges, and celebrate traditions that strengthen unity.
                </p>
              </div>
              
              <div className="activity" style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                color: "#333",
                transition: "transform 0.3s ease",
                transform: "translateY(0)",
                cursor: "default"
              }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  marginBottom: "15px",
                  color: "#7d3c98",
                  borderLeft: "4px solid #7d3c98",
                  paddingLeft: "15px"
                }}>3. Social & Health Care</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  At the core of our mission is social and health care services. We support individuals and
                  communities through compassionate home care assistance, health awareness programs, and 
                  social initiatives that aim to improve overall well-being. Our commitment is to ensure that
                  those in need receive the care and support necessary to live a dignified and fulfilling life.
                </p>
              </div>
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
  
  export default About;