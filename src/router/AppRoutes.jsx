import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import OurWork from "../pages/ourWork/OurWork";
import Services from "../pages/services/Services";
import Technology from "../pages/technology/Technology";
import Industries from "../pages/industry/Industries";
import AboutCompany from "../pages/company/section/AboutCompany";
import Company from "../pages/company/Company";
import { Carpenter } from "@mui/icons-material";
import Career from "../pages/career/Career";
import GetQuote from "../pages/getQuote/GetQuote";
import ContactUs from "../pages/contact/ContactUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          {/* HOME ROUTE — Required */}
          <Route path="/" element={<HomePage />} />

          {/* ABOUT ROUTE — Your navbar has /about link */}
          <Route path="/about" element={<About />} />

          {/* OUR WORK ROUTE */}
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/technology" element={<Technology />} /> */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/getQuote" element={<GetQuote />} />
          <Route path="/contactus" element={<ContactUs />} />




        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
