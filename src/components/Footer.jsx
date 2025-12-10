import {
    Box,
    Typography,
    IconButton,
    Divider,
    Link,
} from "@mui/material";
import {
    Facebook,
    LinkedIn,
    Twitter,
    Instagram,
    KeyboardArrowUp,
} from "@mui/icons-material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const footerLinks = {
    services: [
        "Custom Software",
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Cloud Solutions",
        "QA & Testing",
        "Hire Developers",
    ],
    company: ["About Us", "Our Work", "Career", "Team", "Blogs"],
    support: ["FAQ", "Help Center", "Privacy Policy", "Terms of Service"],
};

const Footer = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #042860 0%, #063a7a 100%)",
                color: "#fff",
                pt: { xs: 6, md: 10 },
                pb: 3,
                px: { xs: 3, md: 8 },
            }}
        >
            {/* Top Section */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "2fr 1fr 1fr 1fr",
                    },
                    gap: { xs: 4, md: 6 },
                    maxWidth: "1400px",
                    mx: "auto",
                    mb: 6,
                }}
            >
                {/* Logo + Social */}
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                        <DeveloperModeIcon sx={{ fontSize: 42, color: "#6B9FFF" }} />
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, letterSpacing: 0.5 }}
                        >
                            ArrayLogic
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            mb: 4,
                            color: "#c4d4e8",
                            lineHeight: 1.7,
                            maxWidth: "350px",
                            fontSize: "0.95rem",
                        }}
                    >
                        We craft high-quality digital products to help businesses grow
                        and succeed in the modern digital landscape.
                    </Typography>

                    {/* Social Icons */}
                    <Box sx={{ display: "flex", gap: 1.5 }}>
                        {[
                            { Icon: Facebook, link: "#" },
                            { Icon: LinkedIn, link: "#" },
                            { Icon: Twitter, link: "#" },
                            { Icon: Instagram, link: "#" },
                        ].map(({ Icon }, i) => (
                            <IconButton
                                key={i}
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.08)",
                                    width: 40,
                                    height: 40,
                                    "&:hover": {
                                        bgcolor: "#6B9FFF",
                                        transform: "translateY(-3px)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Icon sx={{ fontSize: 20, color: "#fff" }} />
                            </IconButton>
                        ))}
                    </Box>
                </Box>

                {/* Services */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ mb: 3, fontWeight: 600, fontSize: "1.1rem" }}
                    >
                        Services
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                        {footerLinks.services.map((item, i) => (
                            <Link
                                key={i}
                                underline="none"
                                sx={{
                                    color: "#c4d4e8",
                                    fontSize: "0.9rem",
                                    "&:hover": {
                                        color: "#6B9FFF",
                                        paddingLeft: "4px",
                                    },
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* Company */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ mb: 3, fontWeight: 600, fontSize: "1.1rem" }}
                    >
                        Company
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                        {footerLinks.company.map((item, i) => (
                            <Link
                                key={i}
                                underline="none"
                                sx={{
                                    color: "#c4d4e8",
                                    fontSize: "0.9rem",
                                    "&:hover": {
                                        color: "#6B9FFF",
                                        paddingLeft: "4px",
                                    },
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* Support */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ mb: 3, fontWeight: 600, fontSize: "1.1rem" }}
                    >
                        Support
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                        {footerLinks.support.map((item, i) => (
                            <Link
                                key={i}
                                underline="none"
                                sx={{
                                    color: "#c4d4e8",
                                    fontSize: "0.9rem",
                                    "&:hover": {
                                        color: "#6B9FFF",
                                        paddingLeft: "4px",
                                    },
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 4 }} />

            {/* Bottom Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                <Typography
                    sx={{
                        color: "#c4d4e8",
                        fontSize: "0.9rem",
                    }}
                >
                    © {new Date().getFullYear()} ArrayLogic. All rights reserved.
                </Typography>

                {/* Back to Top */}
                <IconButton
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    sx={{
                        bgcolor: "rgba(255,255,255,0.08)",
                        width: 45,
                        height: 45,
                        "&:hover": {
                            bgcolor: "#6B9FFF",
                            transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                    }}
                >
                    <KeyboardArrowUp sx={{ color: "#fff" }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;