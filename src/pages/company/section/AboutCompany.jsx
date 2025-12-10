import { Box, Grid, Typography } from "@mui/material";

export default function AboutCompany() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        
        {/* LEFT NUMBER BLOCK */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 3,
            }}
          >
            {/* Left Blue Bracket */}
            <Box
              sx={{
                width: "6px",
                height: "180px",
                borderLeft: "8px solid #0046E5",
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
              }}
            />

            {/* Number + Text */}
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 700, fontSize: "70px", lineHeight: 1 }}
              >
                10+
              </Typography>
              <Typography sx={{ mt: 1, fontSize: "20px", color: "#333" }}>
                Years  
                <br />
                experience  
                <br />
                working
              </Typography>
            </Box>

            {/* Right Blue Bracket */}
            <Box
              sx={{
                width: "6px",
                height: "180px",
                borderRight: "8px solid #0046E5",
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
              }}
            />
          </Box>
        </Grid>

        {/* MIDDLE TEXT BLOCK */}
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "gray",
              letterSpacing: "1px",
              mb: 1,
            }}
          >
            SINCE 2013
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.4,
              maxWidth: "350px",
            }}
          >
            A Great Story Starts  
            <br />
            with a Friendly Team
          </Typography>
        </Grid>

        {/* RIGHT PARAGRAPH BLOCK */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "500px",
              fontSize: "17px",
            }}
          >
            ArrayLogic Technologies, With more than 10 years of experience, ArrayLogic Technologies 
            has successfully completed more than 250 projects. ArrayLogic has established itself 
            as a trusted partner for businesses worldwide. Our commitment to excellence and 
            customer satisfaction has driven us to success, making us a leader in the tech 
            industry. ArrayLogic’s diverse portfolio and expertise underline our reputation for 
            providing top-notch, custom-tailored solutions.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}
