import { Box, Typography } from "@mui/material";

const ClientStories = ({ title, highlight, description }) => {
    return (
        <Box
            sx={{
                width: "100%",
                textAlign: "center",
                py: 8,
                px: 2,
            }}
        >
            {/* Main Heading */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                }}
            >
                {title}{" "}
                <Box component="span" sx={{ color: "#3f7bf7" }}>
                    {highlight}
                </Box>
            </Typography>

            {/* Subtext */}
            <Typography
                sx={{
                    mt: 3,
                    maxWidth: "900px",
                    margin: "0 auto",
                    fontSize: "sm",
                    color: "#6f6f6f",
                    lineHeight: 1.6,
                }}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default ClientStories;
