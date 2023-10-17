import './App.css';
import AboutUs from './componet/AboutUs/AboutUs';
import Footer from './componet/Footer/Footer';
import ContactUs from './componet/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componet/Dashboard/Dashboard';
import CSRActivity from './componet/CSRActivity/CSRActivity';
import Services from './componet/Services/Services';
import Certificates from './componet/Certificates/Certificates';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/gajanan_mining_india" element={<Dashboard />} />
        <Route path="/gajanan_mining_india/about" element={<AboutUs />} />
        <Route path="/gajanan_mining_india/services" element={<Services />} />
        <Route path="/gajanan_mining_india/certificate" element={<Certificates />} />
        <Route path="/gajanan_mining_india/csr-activity" element={<CSRActivity />} />
        <Route path="/gajanan_mining_india/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>


}

export default App;
