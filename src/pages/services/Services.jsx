import React from 'react'
import bgImage from "../../assets/images/home-business.jpg";
import { Box, Typography } from "@mui/material";
import ServicesCardSection from '../../components/card/ServiceCardSection';
import WhyChooseSection from './section/WhyChooseSection';
const Services = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            backgroundImage: `linear-gradient(rgba(63, 123, 247, 0.85), rgba(63, 123, 247, 0.85)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* HEADING */}
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            ArrayLogic Software <br /> Development Company
          </Typography>

          {/* SUB HEADING */}
          <Typography
            variant="h6"
            sx={{
              maxWidth: "700px",
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            - Use our technical services and solutions for ultimate business efficiency.
          </Typography>

        </Box>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 8, md: 12 },
            px: { xs: 3, md: 20 },
            bgcolor: "#fff",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", md: "42px" },
              lineHeight: 1.3,
            }}
          >
            Innovate with Arraylogic:{" "}
            <Box component="span" sx={{ color: "#3A7BFF" }}>
              Empowering Tomorrow's Solutions Today
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.6,
              color: "#444",
              maxWidth: "1100px",
              mx: "auto",
            }}
          >
            ArrayLogic Software Development Company is a trusted technology partner for
            businesses worldwide, enabling them to use IT as a strategy. Our vast
            technical expertise, immaculate capacity and unwavering focus on
            customer needs have led to success across multiple industries and
            verticals.
          </Typography>


        </Box>
        <Box >
          <ServicesCardSection />

        </Box>
        <WhyChooseSection />
      </Box>
    </>
  )
}

export default Services