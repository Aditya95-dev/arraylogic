import { Typography, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import ClientStories from "../components/ClientStories";
import CaseStudyCard from "../components/card/CaseStudyCard";
import TrustSection from "./TrustSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <>
      
        <HeroSection />
        <ClientStories
          title="Some of Our"
          highlight="Client Stories"
          description="Our tech teams consistently deliver exceptional value, exceed industry expectations, and set the standard for excellence."
        />
        <CaseStudyCard />
        <TrustSection />
        <ClientStories
          title="See"
          highlight="what we can do for you"
          description="We develop scalable solutions that meet the ever-evolving needs of organizations, ensuring success and sustainability."
        />
        <ServicesSection />
      
    </>
  );
};

export default Home;


