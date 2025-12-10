import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Homedigital from "../../../assets/images/homedigital.jpg";
// import BgImg from "../../../assets/images/src/assets/images/homedigital.jpg";
import BgImg from "../../../assets/images/homedigital.jpg";


export default function CareersSection() {
  return (
    <Box sx={{ backgroundColor: "#4A90E2", minHeight: "100vh" }}>
      <Grid container sx={{ minHeight: "100vh" }}>

        {/* LEFT IMAGE SECTION */}
        <Grid
          sx={{
            position: "relative",
            height: { xs: "350px", md: "100vh" },
            overflow: "hidden",
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={BgImg}
            alt="Business background"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Dark overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 1,
            }}
          />
        </Grid>

        {/* RIGHT TEXT SECTION */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 4, md: 8 },
            color: "white",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 3,
                opacity: 0.95,
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              LET'S WORK TOGETHER
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mt: 2,
                mb: 4,
                lineHeight: 1.2,
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              Join Our Passionate <br />
              Team
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.95,
                fontSize: "1.125rem",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Welcome to ArrayLogic! We're glad you've explored career opportunities
              with us. At ArrayLogic, we are passionate about developing innovative
              solutions and pushing the boundaries of technology.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}