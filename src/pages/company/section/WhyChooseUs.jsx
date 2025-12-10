import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Typography } from "@mui/material";

export default function WhyChooseUs() {
  const items = [
    { icon: <LightbulbIcon sx={{ fontSize: 50, color: "#2f6bff" }} />, title: "Innovative Models" },
    { icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#2f6bff" }} />, title: "Development Records" },
    { icon: <GroupsIcon sx={{ fontSize: 50, color: "#2f6bff" }} />, title: "Certified Developers" },
    { icon: <AttachMoneyIcon sx={{ fontSize: 50, color: "#2f6bff" }} />, title: "Cost Effective Services" },
  ];

  return (
    <Box sx={{ width: "100%", py: 10, backgroundColor: "#fafafa" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 600, mb: 8, fontSize: { xs: "28px", md: "36px" }, color: "#111" }}
      >
        Why Choose ArrayLogic ?
      </Typography>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 6,
          textAlign: "center",
        }}
      >
        {items.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                width: 150,
                height: 150,
                margin: "auto",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to bottom right, #eef3ff, #fff3ef)",
                boxShadow: "0px 5px 18px rgba(0,0,0,0.05)",
              }}
            >
              {item.icon}
            </Box>

            <Typography sx={{ mt: 2.5, fontSize: "18px", fontWeight: 500, color: "#333" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
