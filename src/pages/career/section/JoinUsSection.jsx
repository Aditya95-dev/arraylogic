// import React from "react";
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     Grid,
//     IconButton,
// } from "@mui/material";
// import { Instagram, Facebook, Twitter, SportsBasketball } from "@mui/icons-material";


// export default function JoinUsSection() {
//     return (
//         <Box
//             sx={{
//                 py: 8,
//                 px: { xs: 3, md: 10 },
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: 8,              // SPACE BETWEEN LEFT & RIGHT
//                 flexWrap: "wrap",
//             }}
//         >
//             {/* LEFT SIDE */}
//             <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 40%" } }}>
//                 <Box sx={{ position: "relative", mb: 4 }}>
//                     <Box
//                         component="img"
//                         sx={{
//                             width: "280px",
//                             position: "absolute",
//                             top: -50,
//                             left: -50,
//                             zIndex: -1,
//                             opacity: 0.8,
//                         }}
//                     />

//                     <Typography
//                         sx={{
//                             fontSize: "4rem",
//                             fontWeight: 300,
//                             color: "#7d7d7d",
//                             lineHeight: 1,
//                         }}
//                     >
//                         Join
//                     </Typography>
//                     <Typography
//                         sx={{
//                             fontSize: "4rem",
//                             fontWeight: 700,
//                             color: "#000",
//                             lineHeight: 1,
//                         }}
//                     >
//                         Us?
//                     </Typography>
//                 </Box>

//                 <Typography sx={{ fontWeight: 700, mb: 2 }}>
//                     CONTACT INFO
//                 </Typography>

//                 <Typography sx={{ color: "#555", lineHeight: 1.8 }}>
//                     ArrayLogic Solutions Pvt. Ltd.,
//                     <br />
//                     Office No. 201, 2nd Floor, Sai
//                     <br />
//                     Plaza, Near Dmart, Sector-30 A,
//                     <br />
//                     Navle Bridge, Pune,
//                     <br />
//                     Maharashtra 411011
//                 </Typography>

//                 <Typography sx={{ mt: 2 }}>
//                     <strong>Tel:</strong> +91-8793726418
//                 </Typography>
//                 <Typography sx={{ mt: 1 }}>
//                     <strong>Email:</strong> info@arraylogic.com
//                 </Typography>

//                 <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
//                     <IconButton><Facebook /></IconButton>
//                     <IconButton><Instagram /></IconButton>
//                     <IconButton><Twitter /></IconButton>
//                     <IconButton><SportsBasketball /></IconButton>
//                 </Box>
//             </Box>

//             {/* RIGHT SIDE */}
//             <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
//                 <Typography
//                     sx={{
//                         fontSize: "2.5rem",
//                         fontWeight: 700,
//                         mb: 4,
//                     }}
//                 >
//                     Let's get in touch with us
//                 </Typography>

//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                     <TextField
//                         variant="standard"
//                         placeholder="Your name"
//                         fullWidth
//                         InputProps={{ disableUnderline: true }}
//                         sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
//                     />

//                     <TextField
//                         variant="standard"
//                         placeholder="Your email address"
//                         fullWidth
//                         InputProps={{ disableUnderline: true }}
//                         sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
//                     />

//                     <TextField
//                         variant="standard"
//                         placeholder="Mobile number"
//                         fullWidth
//                         InputProps={{ disableUnderline: true }}
//                         sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
//                     />

//                     <Box>
//                         <Typography sx={{ mb: 1, color: "#555" }}>
//                             Upload Resume
//                         </Typography>
//                         <input type="file" style={{ marginTop: "5px" }} />
//                     </Box>

//                     <Button
//                         variant="outlined"
//                         sx={{
//                             width: "180px",
//                             mt: 2,
//                             borderRadius: "6px",
//                             borderColor: "#0047E1",
//                             color: "#0047E1",
//                             textTransform: "none",
//                             fontWeight: 600,
//                             letterSpacing: 1,
//                             py: 1.2,
//                             "&:hover": {
//                                 borderColor: "#0039b3",
//                                 backgroundColor: "#f4f7ff",
//                             },
//                         }}
//                     >
//                         SEND MESSAGE
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>


//     );
// }


import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Alert,
    Snackbar,
} from "@mui/material";
import { Instagram, Facebook, Twitter, SportsBasketball } from "@mui/icons-material";

export default function JoinUsSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        resume: null,
    });
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

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.mobile) {
            setSnackbarMessage("Please fill in all required fields");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSnackbarMessage("Please enter a valid email address");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent(`Job Application from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\n${formData.resume ? 'Resume attached (please note: file attachments need to be added manually in the email client)' : 'No resume attached'}`
        );
        const mailtoLink = `mailto:hr.arraylogic@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        setSnackbarMessage("Opening your email client...");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        // Reset form after a delay
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                mobile: "",
                resume: null,
            });
        }, 2000);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100vw",
                overflow: "hidden",
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 3, md: 6, lg: 8 },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    gap: { xs: 6, md: 8 },
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                {/* LEFT SIDE */}
                <Box
                    sx={{
                        flex: { xs: "1", md: "0 0 40%" },
                        maxWidth: { xs: "100%", md: "40%" },
                    }}
                >
                    <Box sx={{ position: "relative", mb: 4 }}>
                        <Typography
                            sx={{
                                fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
                                fontWeight: 300,
                                color: "#7d7d7d",
                                lineHeight: 1,
                            }}
                        >
                            Join
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
                                fontWeight: 700,
                                color: "#000",
                                lineHeight: 1,
                            }}
                        >
                            Us?
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                    >
                        CONTACT INFO
                    </Typography>

                    <Typography
                        sx={{
                            color: "#555",
                            lineHeight: 1.8,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                    >
                        ArrayLogic Solutions Pvt. Ltd.,
                        <br />
                        Office No. 201, 2nd Floor, Sai
                        <br />
                        Plaza, Near Dmart, Sector-30 A,
                        <br />
                        Navle Bridge, Pune,
                        <br />
                        Maharashtra 411011
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                    >
                        <strong>Tel:</strong> +91-8793726418
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                    >
                        <strong>Email:</strong> info@arraylogic.com
                    </Typography>

                    <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                        <IconButton
                            sx={{
                                "&:hover": { color: "#0047E1" },
                            }}
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            sx={{
                                "&:hover": { color: "#0047E1" },
                            }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            sx={{
                                "&:hover": { color: "#0047E1" },
                            }}
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            sx={{
                                "&:hover": { color: "#0047E1" },
                            }}
                        >
                            <SportsBasketball />
                        </IconButton>
                    </Box>
                </Box>

                {/* RIGHT SIDE */}
                <Box
                    sx={{
                        flex: { xs: "1", md: "0 0 55%" },
                        maxWidth: { xs: "100%", md: "55%" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            mb: 4,
                            lineHeight: 1.2,
                        }}
                    >
                        Let's get in touch with us
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <TextField
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="Your name*"
                            fullWidth
                            required
                            InputProps={{ disableUnderline: true }}
                            sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
                        />

                        <TextField
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="Your email address*"
                            fullWidth
                            required
                            type="email"
                            InputProps={{ disableUnderline: true }}
                            sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
                        />

                        <TextField
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="Mobile number*"
                            fullWidth
                            required
                            InputProps={{ disableUnderline: true }}
                            sx={{ borderBottom: "1px solid #ddd", pb: 1 }}
                        />

                        <Box>
                            <Typography sx={{ mb: 1, color: "#555" }}>
                                Upload Resume
                            </Typography>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                style={{ marginTop: "5px" }}
                            />
                            {formData.resume && (
                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: "0.875rem",
                                        color: "#0047E1",
                                    }}
                                >
                                    Selected: {formData.resume.name}
                                </Typography>
                            )}
                        </Box>

                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{
                                width: { xs: "100%", sm: "180px" },
                                mt: 2,
                                borderRadius: "6px",
                                borderColor: "#0047E1",
                                color: "#0047E1",
                                textTransform: "none",
                                fontWeight: 600,
                                letterSpacing: 1,
                                py: 1.2,
                                "&:hover": {
                                    borderColor: "#0039b3",
                                    backgroundColor: "#f4f7ff",
                                },
                            }}
                        >
                            SEND MESSAGE
                        </Button>
                    </Box>
                </Box>
            </Box>

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
        </Box>
    );
}