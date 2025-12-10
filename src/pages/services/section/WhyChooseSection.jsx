import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function WhyChooseSection() {
    const items = [
        {
            icon: <AttachMoneyIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Optimize Budget",
            desc: "Engage skilled resources as and when needed and reduce overall costs."
        },
        {
            icon: <EmailIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Expertise on Legacy and Modern Tech",
            desc: "Agile or waterfall systems - ArrayLogic has expertise in all development methods."
        },
        {
            icon: <TrackChangesIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Opt for Value-driven Engagement Models",
            desc: "The pay-as-you-use model requires you to pay more only when utilizing extra services."
        },
        {
            icon: <LaptopMacIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Excellent Infrastructure and Maintenance",
            desc: "Flawless development practices and 24/7 availability for maintenance."
        },
        {
            icon: <PeopleAltIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Availability of Contract-to-hire Structure",
            desc: "Open to long and short-term engagements as per client needs."
        },
        {
            icon: <VerifiedUserIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
            title: "Extremely Competent and Skilled Talent Pool",
            desc: "Certified experts with proven track records and risk mitigation skills."
        }
    ];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100vw",
                overflow: "hidden",
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 3, md: 4, lg: 6 },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    background: "#3b82f6",
                    color: "#fff",
                    borderRadius: { xs: 3, md: 6 },
                    py: { xs: 6, sm: 8, md: 10 },
                    px: { xs: 3, sm: 4, md: 6 },
                    maxWidth: "1400px",
                    mx: "auto",
                    boxSizing: "border-box",
                }}
            >
                {/* Heading Section */}
                <Typography
                    variant="h4"
                    fontWeight={700}
                    align="center"
                    sx={{
                        mb: 3,
                        fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2.125rem" },
                        lineHeight: 1.3,
                    }}
                >
                    Why choose ArrayLogic for Software Development
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        maxWidth: "850px",
                        mx: "auto",
                        opacity: 0.9,
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.7,
                        px: { xs: 1, md: 0 },
                    }}
                >
                    Different software types are developed by ArrayLogic, innovative and scalable solutions being delivered to the
                    specified needs of the consumers. We have a team that ensures quality, timely delivery as well as lifelong
                    support, hence we naturally become partners when striving toward technological goals.
                </Typography>

                {/* Grid Items - 2 Columns */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",              // 1 column on mobile
                            md: "repeat(2, 1fr)",   // 2 columns on desktop
                        },
                        gap: { xs: 3, sm: 4, md: 6 },
                        maxWidth: "1200px",
                        mx: "auto",
                    }}
                >
                    {items.map((item, i) => (
                        <Box
                            key={i}
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    mt: 0.5,
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                    sx={{
                                        fontSize: { xs: "1rem", md: "1.125rem" },
                                        mb: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        opacity: 0.9,
                                        fontSize: { xs: "0.875rem", md: "0.95rem" },
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}