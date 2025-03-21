import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Education from "./components/Education";
import Culture from "./components/Culture";
import Healthcare from "./components/Healthcare";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/education" element={<Education />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/healthcare" element={<Healthcare />} />
    </Routes>
  );
}

export default App;
