
import './App.css';
import HomePage from './components/work/HomePage';
import AboutUs from './components/office/AboutUs';
import ContactPage from './components/work/ContactPage';
import { Route,  Routes } from 'react-router-dom';
import Blog from './components/office/Blog';

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
