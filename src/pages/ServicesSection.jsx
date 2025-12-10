import { Box } from "@mui/material";
import ServiceCard from "../components/card/ServiceCard";

const ServicesSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "center",
                py: 6,
            }}
        >
            <ServiceCard
                title="Development"
                items={[
                    "Custom Software Development",
                    "Web Development",
                    "Mobile App Development",
                    "AI-Based Solutions",
                    "IOT-Based Solutions",
                ]}
                image="/images/dev.jpg"
                gradient="linear-gradient(180deg, rgba(0,0,50,0.6), rgba(0,0,80,0.7))"
            />

            <ServiceCard
                title="Team"
                items={[
                    "Resource as a Service",
                    "Build Cross-Functional Teams",
                    "Source AI Developers",
                    "Hire DevOps Engineers",
                    "Agile Staffing",
                ]}
                image="/images/team.jpg"
                gradient="linear-gradient(180deg, rgba(80,30,0,0.6), rgba(120,50,0,0.7))"
            />

            <ServiceCard
                title="Cloud"
                items={[
                    "Cloud Migration",
                    "Modernization",
                    "DevOps Automation",
                    "GenAI Consulting",
                    "Data Analytics",
                ]}
                image="/images/cloud.jpg"
                gradient="linear-gradient(180deg, rgba(60,0,80,0.6), rgba(120,0,120,0.7))"
            />
        </Box>
    );
};

export default ServicesSection;
