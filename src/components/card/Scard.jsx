import { Card, CardContent, Typography, Box, Link } from "@mui/material";

const Scard = ({ icon, title, description }) => {
    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 320, sm: 360, md: 380 },
                borderRadius: 3,
                p: { xs: 2, sm: 2.5, md: 3 },
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
                },
            }}
        >
            <CardContent
                sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "&:last-child": {
                        pb: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        fontSize: { xs: 45, md: 50 },
                        color: "#3b82f6",
                        mb: 2,
                    }}
                >
                    {icon}
                </Box>

                <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        height: 2,
                        width: 80,
                        mt: 1,
                        mb: 2,
                        background: "#e5e7eb",
                    }}
                />

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 3,
                        flexGrow: 1,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>

                <Link
                    href="#"
                    underline="hover"
                    sx={{
                        color: "#3b82f6",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        mt: "auto",
                    }}
                >
                    LEARN MORE
                </Link>
            </CardContent>
        </Card>
    );
};

export default Scard;