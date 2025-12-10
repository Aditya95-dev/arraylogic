// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
// import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

// export default function WhyJoinSection() {
//     const items = [
//         {
//             icon: <SavingsOutlinedIcon sx={{ fontSize: 55, color: "#4A90E2" }} />,
//             title: "Cutting-Edge Projects",
//             text: "Join us for impactful projects, pushing your skills in web and mobile innovation."
//         },
//         {
//             icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 55, color: "#4A90E2" }} />,
//             title: "Continuous Learning",
//             text: "Evolve through workshops, conferences and certifications to stay ahead in technology."
//         },
//         {
//             icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 55, color: "#4A90E2" }} />,
//             title: "Work-Life Balance",
//             text: "Enjoy remote flexibility and supportive work schedules that respect your personal life."
//         },
//         {
//             icon: <MouseOutlinedIcon sx={{ fontSize: 55, color: "#4A90E2" }} />,
//             title: "Collaborative Environment",
//             text: "Work with passionate professionals and grow through teamwork and knowledge-sharing."
//         }
//     ];

//     return (
//         <>
//             <Box
//                 sx={{
//                     px: { xs: 3, md: 10 },
//                     py: 10,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     textAlign: "center"
//                 }}
//             >
//                 <Typography
//                     variant="subtitle1"
//                     sx={{ color: "#4A90E2", fontWeight: 600, letterSpacing: 1 }}
//                 >
//                     ABOUT COMPANY
//                 </Typography>

//                 <Typography
//                     variant="h3"
//                     sx={{
//                         fontWeight: 700,
//                         mt: 1,
//                         mb: 8,
//                         color: "#0a0a0a",
//                         lineHeight: 1.2
//                     }}
//                 >
//                     Why Join ArrayLogic?
//                 </Typography>

//                 {/* Cards */}
//                 <Grid container spacing={6}>
//                     {items.map((item, index) => (
//                         <Grid key={index} item xs={12} md={6}>
//                             <Box
//                                 sx={{
//                                     display: "flex",
//                                     gap: 3,
//                                     p: 4,
//                                     borderRadius: 3,
//                                     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                                     background: "#ffffff",
//                                     transition: "all 0.3s ease",
//                                     "&:hover": {
//                                         boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//                                         transform: "translateY(-4px)"
//                                     }
//                                 }}
//                             >
//                                 {item.icon}

//                                 <Box>
//                                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
//                                         {item.title}
//                                     </Typography>

//                                     <Typography
//                                         variant="body1"
//                                         sx={{ color: "gray", fontSize: "1.05rem" }}
//                                     >
//                                         {item.text}
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }


import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

export default function WhyJoinSection() {
    const items = [
        {
            icon: <SavingsOutlinedIcon sx={{ fontSize: 48, color: "#9e9e9e" }} />,
            title: "Cutting-Edge Projects",
            text: "Join us for impactful projects, pushing your skills in web and mobile innovation."
        },
        {
            icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 48, color: "#9e9e9e" }} />,
            title: "Continuous Learning",
            text: "Evolve with us through workshops, conferences and certifications, staying ahead in technology."
        },
        {
            icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 48, color: "#9e9e9e" }} />,
            title: "Work-Life Balance",
            text: "Enjoy flexibility, balancing work and personal life with remote options and flexible hours."
        },
        {
            icon: <MouseOutlinedIcon sx={{ fontSize: 48, color: "#9e9e9e" }} />,
            title: "Collaborative Environment",
            text: "Work with passionate professionals, fostering growth and creativity through teamwork and support."
        }
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#f8f9fa",
                px: { xs: 3, md: 8 },
                py: { xs: 8, md: 12 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 8 }
                }}
            >
                {/* LEFT SIDE - TITLE */}
                <Box
                    sx={{
                        flex: { xs: "1 1 100%", md: "0 0 33.333%" },
                        minWidth: 0
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "#4A90E2",
                            fontWeight: 600,
                            letterSpacing: 2,
                            mb: 2,
                            fontSize: "0.875rem"
                        }}
                    >
                        ABOUT COMPANY
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: "#1a1a1a",
                            lineHeight: 1.3,
                            fontSize: { xs: "2rem", md: "2.5rem" }
                        }}
                    >
                        Why Join<br />
                        ArrayLogic?
                    </Typography>
                </Box>

                {/* RIGHT SIDE - ITEMS */}
                <Box
                    sx={{
                        flex: { xs: "1 1 100%", md: "0 0 66.667%" },
                        minWidth: 0
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: { xs: 5, md: 6 }
                        }}
                    >
                        {items.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2
                                }}
                            >
                                {item.icon}

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#1a1a1a",
                                        fontSize: "1.25rem"
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#757575",
                                        lineHeight: 1.7,
                                        fontSize: "1rem"
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}