import { Box, Typography } from "@mui/material";

const TrustSection = () => {
    return (
        <Box
            sx={{
                background: "#4287f5",
                color: "white",
                px: { xs: 3, md: 10 },
                py: { xs: 6, md: 10 },
            }}
        >


            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                }}
            >
                {/* LEFT SIDE CONTENT */}

                <Box sx={{ flex: 1, pr: { md: 6 } }}>
                    {/* Heading */}
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "2.3rem" },
                            fontWeight: 400,
                            mb: 3,
                        }}
                    >
                        Why you should trust ArrayLogic
                    </Typography>
                    {/* 01 */}
                    <Box sx={{}}>
                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 500,
                                mt: 1,
                            }}
                        >
                            1. Global Reach
                        </Typography>

                        <Box
                            sx={{
                                borderLeft: "2px solid white",
                                pl: 3,
                                mt: 2,
                                opacity: 0.93,
                            }}
                        >
                            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                                ArrayLogic  boasts a global footprint, having successfully served
                                customers in more than 10 international locations.
                            </Typography>
                        </Box>
                    </Box>

                    {/* 02 */}
                    <Box sx={{}}>
                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 400,
                                mt: 1,
                            }}
                        >
                            2.  Extensive Industry Experience
                        </Typography>
                    </Box>

                    {/* 03 */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 400,

                            }}
                        >
                            3. Proven Results
                        </Typography>
                    </Box>
                </Box>

                {/* RIGHT SIDE STATS */}
                <Box
                    sx={{
                        position: "relative",
                        width: 350,
                        height: 350,
                        mx: "auto",
                        mt: { xs: 6, md: 0 },
                    }}
                >
                    {[
                        { number: "45+", label: "Team" },
                        { number: "10+", label: "Experiences" },
                        { number: "12+", label: "Countries" },
                        { number: "35+", label: "Industries" },
                        { number: "250+", label: "Projects" },
                    ].map((item, idx) => {
                        const angle = (idx / 5) * 2 * Math.PI; // 5 items in circle
                        const radius = 140;

                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <Box
                                key={idx}
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                    width: 130,
                                    height: 130,
                                    borderRadius: "50%",
                                    background: "white",
                                    color: "#4287f5",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                    fontWeight: 700,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.6rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.number}
                                </Typography>
                                <Typography sx={{ fontSize: ".95rem", mt: 0.5 }}>
                                    {item.label}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>

            </Box>
        </Box>
    );
};

export default TrustSection;
