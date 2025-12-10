import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Snackbar,
    Alert,
    Checkbox,
} from "@mui/material";
import BgImg from "../../assets/images/home-business.jpg";
import SimpleProcess from "./sections/SimpleProcess";

export default function GetQuote() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        companyName: "",
        businessEmail: "",
        description: "",
    });
    const [isRobot, setIsRobot] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.phoneNumber || !formData.companyName ||
            !formData.businessEmail || !formData.description) {
            setSnackbarMessage("Please fill in all required fields");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.businessEmail)) {
            setSnackbarMessage("Please enter a valid email address");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) {
            setSnackbarMessage("Please enter a valid phone number");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Check reCAPTCHA
        if (!isRobot) {
            setSnackbarMessage("Please verify that you're not a robot");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent(`Quote Request from ${formData.fullName}`);
        const body = encodeURIComponent(
            `New Quote Request:\n\n` +
            `Full Name: ${formData.fullName}\n` +
            `Phone Number: ${formData.phoneNumber}\n` +
            `Company Name: ${formData.companyName}\n` +
            `Business Email: ${formData.businessEmail}\n\n` +
            `Description:\n${formData.description}`
        );
        const mailtoLink = `mailto:info@arraylogic.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        setSnackbarMessage("Opening your email client...");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        // Reset form after a delay
        setTimeout(() => {
            setFormData({
                fullName: "",
                phoneNumber: "",
                companyName: "",
                businessEmail: "",
                description: "",
            });
            setIsRobot(false);
        }, 2000);
    };

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                    width: "100%",
                    maxWidth: "100vw",
                    overflow: "hidden",
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 4, md: 8 },
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: { xs: 4, md: 6, lg: 8 },
                    boxSizing: "border-box",
                    // Background image layer
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(8px)",
                        zIndex: -2,
                    },
                    // Blue overlay layer
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(66, 133, 244, 0.85)",
                        zIndex: -1,
                    },
                }}
            >
                {/* LEFT SECTION */}
                <Box
                    sx={{
                        flex: 1,
                        color: "white",
                        maxWidth: { xs: "100%", lg: "600px" },
                        width: "100%",
                        textAlign: { xs: "center", lg: "left" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                            fontWeight: 400,
                            mb: 3,
                            color: "white",
                        }}
                    >
                        You are at the right place
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            opacity: 0.95,
                            maxWidth: "520px",
                            lineHeight: 1.6,
                            mb: 6,
                            color: "white",
                            mx: { xs: "auto", lg: 0 },
                        }}
                    >
                        Let's discuss how we can support your business objectives. Fill out the
                        form and take the first step towards transformation.
                    </Typography>

                    {/* FEATURE BOXES */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            flexWrap: "wrap",
                            justifyContent: { xs: "center", lg: "flex-start" },
                        }}
                    >
                        {[
                            { emoji: "👤", text: "100% certified talent" },
                            { emoji: "⚙️", text: "Wide tech Expertise" },
                            { emoji: "👥", text: "Team Scalability" },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: 140, sm: 160 },
                                    height: { xs: 110, sm: 120 },
                                    borderRadius: 2,
                                    background: "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1,
                                }}
                            >
                                <Typography sx={{ fontSize: { xs: "1.75rem", sm: "2rem" }, mb: 0.5 }}>
                                    {item.emoji}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "0.8rem", sm: "0.85rem" },
                                        color: "white",
                                        textAlign: "center",
                                        px: 2
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* RIGHT FORM CARD */}
                <Card
                    sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", sm: "500px", lg: "420px" },
                        borderRadius: 3,
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                        background: "white",
                    }}
                >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: "1.25rem", md: "1.5rem" },
                                fontWeight: 500,
                                mb: 4,
                                color: "#333",
                            }}
                        >
                            Get your project moving!
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 2.5 }}>
                                <TextField
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full Name*"
                                    fullWidth
                                    size="small"
                                    required
                                    sx={{
                                        bgcolor: "#f5f5f5",
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#e0e0e0",
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number*"
                                    fullWidth
                                    size="small"
                                    required
                                    sx={{
                                        bgcolor: "#f5f5f5",
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#e0e0e0",
                                            },
                                        },
                                    }}
                                />
                            </Box>

                            <TextField
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Your company name*"
                                fullWidth
                                size="small"
                                required
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    mb: 2.5,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#e0e0e0",
                                        },
                                    },
                                }}
                            />

                            <TextField
                                name="businessEmail"
                                value={formData.businessEmail}
                                onChange={handleInputChange}
                                placeholder="Business Email*"
                                fullWidth
                                size="small"
                                required
                                type="email"
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    mb: 2.5,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#e0e0e0",
                                        },
                                    },
                                }}
                            />

                            <TextField
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Write description here*"
                                fullWidth
                                multiline
                                rows={4}
                                required
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#e0e0e0",
                                        },
                                    },
                                }}
                            />

                            {/* reCAPTCHA box */}
                            <Box
                                sx={{
                                    border: "1px solid #d3d3d3",
                                    borderRadius: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: 2,
                                    py: 2,
                                    mb: 3,
                                    bgcolor: "#fafafa",
                                    cursor: "pointer",
                                }}
                                onClick={() => setIsRobot(!isRobot)}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Checkbox
                                        checked={isRobot}
                                        onChange={(e) => setIsRobot(e.target.checked)}
                                        sx={{
                                            p: 0,
                                            color: "#999",
                                            '&.Mui-checked': {
                                                color: "#4285f4",
                                            },
                                        }}
                                    />
                                    <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                                        I'm not a robot
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285f4' d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z'/%3E%3Cpath fill='%23fff' d='M10.5 16.5l-4.5-4.5 1.41-1.41L10.5 13.67l6.09-6.09L18 9z'/%3E%3C/svg%3E"
                                        sx={{ width: 28, height: 28 }}
                                    />
                                    <Typography sx={{ fontSize: "0.6rem", color: "#999", mt: 0.5 }}>
                                        reCAPTCHA
                                    </Typography>
                                    <Typography sx={{ fontSize: "0.55rem", color: "#999" }}>
                                        Privacy - Terms
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                sx={{
                                    bgcolor: "#4285f4",
                                    color: "#fff",
                                    fontWeight: 600,
                                    py: 1.5,
                                    borderRadius: 1,
                                    fontSize: "0.95rem",
                                    textTransform: "uppercase",
                                    "&:hover": { bgcolor: "#3367d6" },
                                }}
                            >
                                REQUEST CALL BACK
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            <SimpleProcess />

            {/* Snackbar for notifications */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}