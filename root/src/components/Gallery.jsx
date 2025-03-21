import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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

  // Gallery images by category
  const galleryImages = {
    classroom: [
      { id: 1, src: "/image/gallery1.jpg", alt: "Classroom Session", title: "Roots Classroom Workshop" },
      { id: 2, src: "/image/gallery1.jpg", alt: "Training Class", title: "Roots Training Session" },
      { id: 3, src: "/image/gallery1.jpg", alt: "Language Class", title: "Roots Language Class" },
    ],
    photographs: [
      { id: 4, src: "/image/gallery1.jpg", alt: "Cultural Event", title: "Cultural Festival" },
      { id: 5, src: "/image/gallery1.jpg", alt: "Health Care", title: "Community Event" },
      { id: 6, src: "/image/gallery1.jpg", alt: "Community Space", title: "Community Space" },
    ],
    travel: [
      { id: 7, src: "/image/gallery1.jpg", alt: "Travel Photo 1", title: "Travel Photography" },
      { id: 8, src: "/image/gallery1.jpg", alt: "Travel Photo 2", title: "Journey Captures" },
      { id: 9, src: "/image/gallery1.jpg", alt: "Travel Photo 3", title: "Expedition Memories" },
    ]
  };

  // Get all images for "all" category
  const allImages = [
    ...galleryImages.classroom,
    ...galleryImages.photographs,
    ...galleryImages.travel
  ];

  // Filter images based on active category
  const getFilteredImages = () => {
    if (activeCategory === "all") return allImages;
    return galleryImages[activeCategory] || [];
  };

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
          <li><Link to="/About" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
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
          <li><Link to="/Gallery" style={{ color: "white", textDecoration: "none", borderBottom: "2px solid white" }}>Gallery</Link></li>
          <li><Link to="/Contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
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
          maxWidth: "1200px",
          width: "90%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
       
          borderRadius: "15px",
          padding: "40px",
          color: "white",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          marginBottom: "50px"
        }}>
          <h1 style={{ 
            fontSize: "42px", 
            marginBottom: "40px", 
            textAlign: "center",
            letterSpacing: "2px",
            borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
            paddingBottom: "15px"
          }}>Our Gallery</h1>
          
          <p style={{ 
            fontSize: "18px", 
            lineHeight: "1.8", 
            marginBottom: "20px",
            textAlign: "center"
          }}>
            Explore our collection of images showcasing our roots classroom, photographs,
            and travel photography. These moments capture the essence of our mission
            and the impact we strive to make.
          </p>
          
          {/* Category Filter Buttons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "40px"
          }}>
            <button 
              onClick={() => setActiveCategory("all")}
              style={{
                padding: "10px 20px",
                backgroundColor: activeCategory === "all" ? "#4a90e2" : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory("classroom")}
              style={{
                padding: "10px 20px",
                backgroundColor: activeCategory === "classroom" ? "#4a90e2" : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Roots Classroom
            </button>
            <button 
              onClick={() => setActiveCategory("photographs")}
              style={{
                padding: "10px 20px",
                backgroundColor: activeCategory === "photographs" ? "#4a90e2" : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Photographs
            </button>
            <button 
              onClick={() => setActiveCategory("travel")}
              style={{
                padding: "10px 20px",
                backgroundColor: activeCategory === "travel" ? "#4a90e2" : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Travel Photography
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "30px"
          }}>
            {getFilteredImages().map(image => (
              <div 
                key={image.id}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  height: "250px",
                  position: "relative",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.querySelector(".image-overlay").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.querySelector(".image-overlay").style.opacity = "0";
                }}
              >
                <div style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></div>
                <div className="image-overlay" style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "15px",
                  transition: "opacity 0.3s ease",
                  opacity: 0
                }}>
                  <h3 style={{
                    margin: 0,
                    fontSize: "18px",
                    color: "white"
                  }}>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            textAlign: "center",
            marginTop: "20px"
          }}>
            <p>
              We regularly update our gallery with new images from our programs and events.
              Check back often to see more of our community in action!
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

export default Gallery;
