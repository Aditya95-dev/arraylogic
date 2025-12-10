import { Box, Typography, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import solutionsImg from "../../../assets/images/businessSoluction.png";

export default function BusinessSolutions() {
    return (
        <Box
            sx={{
                width: "100%",
                py: 8,
                px: { xs: 3, md: 10 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 8,
            }}
        >
            {/* LEFT SECTION */}
            <Box flex={1}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{ lineHeight: 1.2, mb: 3 }}
                >
                    Unlocking Business <br />
                    Growth with Our Software Solutions{" "}
                    
                </Typography>

                {/* Feature List */}
                <Stack spacing={2} sx={{ mb: 4 }}>
                    {[
                        "Customer Relationship Management (CRM)",
                        "Web Application Development",
                        "Mobile Application Development",
                        "Scalability & Database Solutions",
                        "Quality Assurance & Testing",
                        "Support & Maintenance and More",
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                            }}
                        >
                            <CheckIcon sx={{ color: "#4a83ff" }} />
                            <Typography variant="h6" sx={{ fontWeight: 400 }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Stack>

                {/* Button */}
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#4a83ff",
                        color: "#4a83ff",
                        px: 4,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                            borderColor: "#4a83ff",
                            backgroundColor: "#4a83ff",
                            color: "#fff",
                        },
                    }}
                >
                    ABOUT COMPANY
                </Button>
            </Box>

            {/* RIGHT SECTION — IMAGE */}
            <Box flex={1} display="flex" justifyContent="center">
                <Box
                    component="img"
                    src={solutionsImg}
                    alt="Software Solutions"
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                        borderRadius: "8px",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                    }}
                />
            </Box>
        </Box>
    );
}
