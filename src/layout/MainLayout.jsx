import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../pages/HeroSection";
import ClientStories from "../components/ClientStories";
import CaseStudyCard from "../components/card/CaseStudyCard";
import TrustSection from "../pages/TrustSection";
import ServicesSection from "../pages/ServicesSection";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
