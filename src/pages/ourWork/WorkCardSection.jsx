import { Box, Grid } from "@mui/material";
import WorksCard from "../../components/card/WorksCard";
import Neetiapp from "../../assets/images/HR Neeti-app.png"
import GateApp from '../../assets/images/Gate App.png'
import Taranter from '../../assets/images/Tranter-app.png'
import Myblo from '../../assets/images/Wyblo-app.png'
import BVG from '../../assets/images/Xfreightlines 1.png'
import Salon from '../../assets/images/Salon1.jpg'
import Watch from '../../assets/images/Watch-app.png'
const WorkCardSection = () => {
    const cardData = [
        {
            title: "HR Neeti",
            subtitle: "HR Management Software Development",
            image: Neetiapp,
            bgColor: "#f7d6b3",
        },
        {
            title: "Gate App",
            subtitle: " ANPR - AI Based vehicle number detection app",
            image: GateApp,
            bgColor: "#fdf3c5",
        },
        {
            title: "Tranter App",
            subtitle: "Mobile-based Support Ticketing System App",
            image: Taranter,
            bgColor: "#e3f0ff",
        },
        {
            title: "Wyblo",
            subtitle: "People-Centered Learning mobile app UI/UX Design",
            image: Myblo,
            bgColor: "#a98cff",
        },
        {
            title: "BVG App",
            subtitle: "Complete Sales Distribution ERP Development",
            image: BVG,
            bgColor: "#fdf3c5",
        },
        {
            title: "Salon ",
            subtitle: "Salon Franchise Management Application Development",
            image: Salon,
            bgColor: "#e3f0ff",
        },
        {
            title: "Watch App",
            subtitle: "Smarwatch app UI/UX Design for room allocation",
            image: Watch,
            bgColor: "#a98cff",
        },
    ];

    return (
        <Box sx={{ px: 4, py: 6 }}>
            <Grid container spacing={4} justifyContent="center">
                {cardData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <WorksCard {...card} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WorkCardSection;
