import { Box, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HubIcon from "@mui/icons-material/Hub";
import RadarIcon from "@mui/icons-material/Radar";
import SecurityIcon from "@mui/icons-material/Security";

export default function AdvancedTechnology() {
  const features = [
    {
      title: "Artificial Intelligence (AI)",
      icon: <SmartToyIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "Applying AI to learning and adapting intelligent software solutions, aimed at delivering the best possible user experience and automating complex systems so for inefficient jobs.",
    },
    {
      title: "Machine Learning (ML)",
      icon: <HubIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "The machine learning algorithms are in place to analyze the data patterns that enable predictive analytics, personalized recommendations and make smarter decisions within software applications.",
    },
    {
      title: "DevOps Practices",
      icon: <RadarIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "Integrate development and operations to execute workflows flawlessly, extend collaboration and increase the speed of software delivery through continuous integration and deployment.",
    },
    {
      title: "Cybersecurity Measures",
      icon: <SecurityIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "Elite cybersecurity measures will be taken to ensure the security of the software systems from all possible threats and to protect the privacy, integrity and compliance requirements of the standards in that industry.",
    },
    {
      title: "Microservices Architecture",
      icon: <HubIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "The microservice architecture will be chosen for generating modular, scalable and maintainable software, such that individual services can have different release cycles and faster iteration periods.",
    },
    {
      title: "Augmented Reality (AR)",
      icon: <RadarIcon sx={{ fontSize: { xs: 40, md: 48 }, color: "#6B9FFF" }} />,
      desc: "Integrate AR for the creation of relevant, engaging, interactive user experiences that transform how customers and users use digital content and applications.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        backgroundColor: "#fafafa",
        boxSizing: "border-box",
      }}
    >
      {/* SECTION TITLE */}
      <Box
        textAlign="center"
        sx={{
          mb: { xs: 6, md: 8 },
          px: { xs: 1, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: "#111",
            mb: 2,
            fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2.25rem", lg: "2.5rem" },
            lineHeight: 1.3,
          }}
        >
          We Use Advanced Technology{" "}
          <Box
            component="span"
            sx={{
              color: "#6B9FFF",
              display: { xs: "block", sm: "inline" },
            }}
          >
            to Develop Software
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            px: { xs: 1, md: 0 },
          }}
        >
          At ArrayLogic, we guarantee our clients innovative, efficient and scalable
          software development, backed by advanced technology.
        </Typography>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          maxWidth: "1400px",
          mx: "auto",
          width: "100%",
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: { xs: 2.5, sm: 3, md: 4 },
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid #e5e5e5",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              boxSizing: "border-box",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box sx={{ mb: 2 }}>{item.icon}</Box>

            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                mt: 2,
                mb: 2,
                color: "#111",
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
              }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#888",
                lineHeight: 1.7,
                fontSize: { xs: "0.875rem", md: "0.95rem" },
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}