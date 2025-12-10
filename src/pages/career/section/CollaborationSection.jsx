import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CollaborationSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 6,
                mb: 10,
            }}
        >
            <Box
                sx={{
                    width: "85%",
                    backgroundColor: "#0047E1",
                    borderRadius: "40px",
                    py: { xs: 8, md: 12 },
                    px: { xs: 3, md: 10 },
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* LEFT PATTERN */}
                <Box

                    sx={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        width: 140,
                        opacity: 0.4,
                    }}
                />

                {/* RIGHT PATTERN */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 30,
                        right: 40,
                        width: 250,
                        opacity: 0.35,
                    }}
                />

                {/* MAIN TEXT */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        maxWidth: "800px",
                        mx: "auto",
                        fontSize: { xs: "2rem", md: "3.2rem" },
                        lineHeight: 1.2,
                    }}
                >
                    Let's work together to <br /> build something great
                </Typography>

                {/* BUTTON */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: "white",
                        color: "#0047E1",
                        borderRadius: "40px",
                        px: 5,
                        py: 1.4,
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#f0f0f0",
                        },
                    }}
                >
                    LET'S COLLABORATE
                </Button>
            </Box>
        </Box>
    );
}
