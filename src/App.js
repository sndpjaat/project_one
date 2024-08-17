
import './App.css';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import { Route,  Routes } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    
   
   
  </>
);

}

export default App;
