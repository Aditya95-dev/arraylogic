import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                px: 3,
                py: 6,
                background: "linear-gradient(to right, #f0edff, #e8f3ff)",
                position: "relative",
                overflow: "hidden",
                
            }}
        >


            {/* CONTENT */}
            <Box sx={{ maxWidth: "900px", zIndex: 1 }}>

                {/* MAIN HEADING */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "2.2rem", md: "3.5rem" },
                        lineHeight: 1.2,
                    }}
                >
                    Your Trusted{" "}
                    <Box component="span" sx={{ color: "#3f7bf7" }}>
                        technology partner
                    </Box>
                    <br />
                    for <Box component="span" sx={{ fontWeight: 700 }}>Software Development</Box>
                </Typography>

                {/* SUB HEADING */}
                <Typography
                    sx={{
                        mt: 3,
                        fontSize: "1.2rem",
                        color: "#444",
                        lineHeight: 1.6,
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    With over a decade of experience, we’ve become a trusted partner for the
                    software development needs of various industries, from established companies
                    around the world to innovative startups and AI-driven enterprises.
                </Typography>

                {/* BUTTON */}
                <Box mt={5}>
                    <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            borderColor: "#3f7bf7",
                            color: "#3f7bf7",
                            paddingX: 4,
                            paddingY: 1.5,
                            borderRadius: "12px",
                            fontSize: "1.1rem",
                            textTransform: "none",
                            ":hover": {
                                borderColor: "#3f7bf7",
                                background: "rgba(63, 123, 247, 0.08)",
                            },
                        }}
                    >
                        Book a Free Consultation
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default HeroSection;
