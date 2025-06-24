import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import{BrowserRouter , Routes, Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import { AuthProvider } from './landing_page/GeneralContext';

const DashboardIframe = () => (
  <iframe
    src="http://localhost:3003" // Updated to 3003
    title="Dashboard"
    style={{ width: '100vw', height: '100vh', border: 'none' }}
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/dashboard" element={<DashboardIframe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </AuthProvider>
);

