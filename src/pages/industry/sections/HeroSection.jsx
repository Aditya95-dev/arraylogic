import { Box, Typography } from "@mui/material";
import Consulting from "../../../assets/images/consulting.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        // width: "auto",
        height: "80vh",
        backgroundImage:
          `linear-gradient(rgba(25,118,210,0.85), rgba(25,118,210,0.85)), url(${Consulting})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 10 },
      }}
    >
      <Box maxWidth="700px">
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: "#fff", mb: 2, lineHeight: 1.3 }}
        >
          State-of-the-Art Software  
          Solutions for All Industries
        </Typography>

        <Box
          sx={{
            width: "150px",
            height: "3px",
            backgroundColor: "#fff",
            mb: 3,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            color: "#e3e3e3",
            fontWeight: 400,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          At Mitroz, we provide the most advanced software to fuel digital
          innovation and smoothen operations across all sectors.
        </Typography>
      </Box>
    </Box>
  );
}


