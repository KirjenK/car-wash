import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './app.css';
import MainPage from './components/MainPage/MainPage';
import LoyalityPage from './components/LoyalityPage/LoyalityPage';
import Footer from './components/Footer/Footer';
import AboutCompanyPage from './components/AboutCompanyPage/AboutCompanyPage';
import Detailing from './components/Detailing/Detailing';

function App():JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loyality" element={<LoyalityPage />} />
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path="/detailing" element={<Detailing />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
