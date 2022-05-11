import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import NavBar from 'components/NavBar';
import { Routes } from 'react-router-dom';
import CatalogCards from 'components/pages/CatalogPag';

const Routest = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<CatalogCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routest;
