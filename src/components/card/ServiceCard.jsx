import { Box, Typography, Button } from "@mui/material";

const ServiceCard = ({ title, items, image, gradient }) => {
    return (
        <Box
            sx={{
                width: { xs: "100%", md: 350 },
                height: 350,
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}
        >
            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: gradient,
                }}
            />

            {/* Content */}
            <Box sx={{ position: "relative", zIndex: 2, p: 4, color: "white" }}>
                <Typography
                    sx={{ fontSize: "1.8rem", fontWeight: 700, mb: 2 }}
                >
                    {title}
                </Typography>

                {/* Bullet Points */}
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {items.map((item, i) => (
                        <li key={i} style={{ marginBottom: "8px", fontSize: "1rem" }}>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <Button
                    variant="outlined"
                    sx={{
                        mt: 4,
                        borderColor: "white",
                        color: "white",
                        borderRadius: 10,
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        "&:hover": {
                            borderColor: "white",
                            backgroundColor: "rgba(255,255,255,0.15)",
                        },
                    }}
                >
                    EXPLORE MORE →
                </Button>
            </Box>
        </Box>
    );
};

export default ServiceCard;
