import { Box, Typography } from "@mui/material";
import bgImage from "../../assets/images/home-business.jpg";
import WorksCardSection from './WorkCardSection'

const OurWork = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "350px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#fff",
                    backgroundImage: `linear-gradient(rgba(63, 123, 247, 0.85), rgba(63, 123, 247, 0.85)), url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* HEADING */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, mb: 2 }}
                >
                    Our Work
                </Typography>

                {/* SUB HEADING */}
                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: "700px",
                        lineHeight: 1.5,
                        fontWeight: 500,
                    }}
                >
                    Explore Our Case Studies Gallery, Where Ideas Flourish.
                </Typography>

            </Box>
            <Box
                sx={{ marginTop: 6, display: 'flex', }}>
                <WorksCardSection />
            </Box>
        </>
    );
};

export default OurWork;
