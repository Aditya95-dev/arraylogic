import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function SimpleProcess() {
    const steps = [
        {
            number: 1,
            title: "FIRST CONNECT",
            description: "Our experts will do a primary analysis of your requirements and call you within 24 hours with more information on our next steps."
        },
        {
            number: 2,
            title: "REQUIREMENT ANALYSIS",
            description: "Our team will collect all requirements for your project, clarify your business objectives, expectations and compare market segments."
        },
        {
            number: 3,
            title: "FINAL PROJECT ESTIMATE",
            description: "We will develop an elaborate project blueprint followed by a final estimate and an action plan for your project."
        }
    ];

    return (
        <Box
            sx={{
                bgcolor: "#f8f9fa",
                py: 10,
                px: 3,
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography
                        sx={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "#4285f4",
                            letterSpacing: "1.5px",
                            mb: 2,
                        }}
                    >
                        SIMPLE PROCESS TO START
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.8rem", md: "2.2rem" },
                            fontWeight: 500,
                            color: "#2c3e50",
                            lineHeight: 1.4,
                        }}
                    >
                        Get tips and tricks about
                        <br />
                        how to grow your results!
                    </Typography>
                </Box>

                {/* Steps */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 4,
                        position: "relative",
                        flexWrap: { xs: "wrap", md: "nowrap" },
                    }}
                >
                    {/* Connecting Line */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "30px",
                            left: "calc(16.66% + 20px)",
                            right: "calc(16.66% + 20px)",
                            height: "2px",
                            bgcolor: "#d0d0d0",
                            zIndex: 0,
                            display: { xs: "none", md: "block" },
                        }}
                    />

                    {steps.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                textAlign: "center",
                                position: "relative",
                                zIndex: 1,
                                minWidth: { xs: "100%", sm: "250px", md: "auto" },
                            }}
                        >
                            {/* Circle with Number */}
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    bgcolor: "#4285f4",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    margin: "0 auto",
                                    mb: 3,
                                    boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
                                }}
                            >
                                {step.number}
                            </Box>

                            {/* Title */}
                            <Typography
                                sx={{
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    color: "#2c3e50",
                                    letterSpacing: "0.5px",
                                    mb: 2,
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    color: "#6c757d",
                                    lineHeight: 1.7,
                                    px: 2,
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}