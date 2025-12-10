
import { Box } from "@mui/material";
import Scard from "./Scard";
import DnsIcon from "@mui/icons-material/Dns";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TvIcon from '@mui/icons-material/Tv';
import BugReportIcon from '@mui/icons-material/BugReport';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function ServicesCardSection() {
    const services = [
        {
            icon: <DnsIcon fontSize="inherit" />,
            title: "Custom Software Development",
            description: "We have solutions designed for your business to be efficient, scalable, and reliable."
        },
        {
            icon: <CodeIcon fontSize="inherit" />,
            title: "Web Development",
            description: "Create dynamic, responsive websites that provide a digital presence with engaging user experience."
        },
        {
            icon: <PhoneIphoneIcon fontSize="inherit" />,
            title: "Mobile App Development",
            description: "We build scalable mobile applications focused on usability and performance."
        },
        {
            icon: <TvIcon fontSize="inherit" />,
            title: "UI/UX Development",
            description: "We design intuitive and engaging user interfaces to enhance user experience."
        },
        {
            icon: <BugReportIcon fontSize="inherit" />,
            title: "Testing and QA",
            description: "Ensuring your software is reliable and secure and fast by passing tests and quality assurance."
        },
        {
            icon: <PeopleOutlineIcon fontSize="inherit" />,
            title: "Hire a Team",
            description: "We provide expert staffing solutions, delivering projects that engage with top talent for optimal success."
        }
    ];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100vw",
                overflow: "hidden",
                py: { xs: 4, sm: 6, md: 8 },
                px: { xs: 2, sm: 3, md: 4, lg: 6 },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: { xs: 3, sm: 3.5, md: 4 },
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                {services.map((service, index) => (
                    <Scard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </Box>
        </Box>
    );
}