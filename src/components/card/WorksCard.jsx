import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const WorksCard = ({ image, title, subtitle, bgColor }) => {
    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: 330,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 28px rgba(0,0,0,0.12)",
                },
            }}
        >
            {/* Top Image Box */}
            <Box
                sx={{
                    width: "100%",
                    height: 200,
                    backgroundColor: bgColor || "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            {/* Text Content */}
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "15px",
                        color: "gray",
                        mb: 3,
                        px: 2,
                    }}
                >
                    {subtitle}
                </Typography>

                <Box sx={{ width: "100%", height: "1px", background: "#fedcb2", mb: 2 }} />

                <Button
                    endIcon={<ArrowRightAltIcon />}
                    sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#000",
                        // bgcolor: '#fedcb2'
                    }}
                >
                    READ CASE STUDY
                </Button>
            </CardContent>
        </Card>
    );
};

export default WorksCard;
