import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Mobile from '../../assets/images/mobile.jpg';
import MobIot from '../../assets/images/mobIot.png';
import Laptop from '../../assets/images/laptop.png';

const CaseStudyCard = () => {
    return (
        <Box
            sx={{
                px: { xs: 2, md: 8 },
                py: 6,
            }}
        >

         
            {[
                {
                    bg: "linear-gradient(135deg, #12a76a, #0c8f57)",
                    img: Mobile,
                    title: "People-centered Learning Experience Platform",
                    desc: "Everything you need for your training organization. Wyblo is a human-centered learning experience that automates business documentation and enables improvement in training methods through real-time analytics.",
                    btn: "#0b5d44"
                },
                {
                    reverse: true,
                    bg: "linear-gradient(135deg, #c7c0bd, #ada39f)",
                    img: MobIot,
                    title: "IOT Based Smart Mask App Development",
                    desc: "Explore our IoT-based smart mask application development case study and enhance healthcare by integrating real-time air quality monitoring, respiratory systems and user alerts for advanced safety and personal health insights.",
                    btn: "#676b69"
                },
                {
                    bg: "linear-gradient(135deg, #7c1cdc, #5f10af)",
                    img: Laptop,
                    title: "Accounting Software Development",
                    desc: "We specialize in web-based development, creating sophisticated accounting software solutions that streamline financial operations, increase accuracy and support scalable growth for businesses of all sizes.",
                    btn: "#7310d6"
                }
            ].map((card, index) => (
                <Box
                    key={index}
                    sx={{
                        mt: index === 0 ? 0 : 6,
                        background: card.bg,
                        borderRadius: "26px",
                        color: "white",
                        p: { xs: 4, md: 6 },
                        display: "flex",
                        flexDirection: card.reverse
                            ? { xs: "column", md: "row-reverse" }
                            : { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        
                        overflow: "hidden",
                        transition: "0.4s ease",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        "&:hover": {
                            transform: "scale(1.015)",
                            boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                        },
                    }}
                >

                    {/* Shine effect */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: "-40%",
                            width: "60%",
                            height: "100%",
                            background: "rgba(255,255,255,0.15)",
                            transform: "skewX(-30deg)",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* LEFT / RIGHT CONTENT */}
                    <Box sx={{ flex: 1, maxWidth: "600px", zIndex: 2 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                lineHeight: 1.2,
                                fontSize: { xs: "1.9rem", md: "2.5rem" },
                            }}
                        >
                            {card.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "1.15rem",
                                opacity: 0.95,
                                lineHeight: 1.7,
                                mb: 4,
                                fontWeight: 300
                            }}
                        >
                            {card.desc}
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: card.btn,
                                borderRadius: "50px",
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                                textTransform: "none",
                                fontWeight: 600,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                                "&:hover": {
                                    background: card.btn + "cc",
                                },
                            }}
                        >
                            VIEW CASE STUDY
                        </Button>
                    </Box>

                    {/* IMAGES */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: { xs: 4, md: 0 },
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Box
                            component="img"
                            src={card.img}
                            alt="case-study"
                            sx={{
                                width: { xs: "90%", md: "420px" },
                                transform: "rotate(-8deg)",
                                transition: "0.4s",
                                filter: "drop-shadow(0px 10px 25px rgba(0,0,0,0.35))",
                                "&:hover": {
                                    transform: "rotate(-3deg) scale(1.03)",
                                },
                            }}
                        />
                    </Box>

                </Box>
            ))}

        </Box>
    );
};

export default CaseStudyCard;
