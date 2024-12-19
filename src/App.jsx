import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Service from './components/pages/Service'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  )
}

export default App