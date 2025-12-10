import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = ["ourwork", "Services", "Industries", "Company", "Career","Contact Us"];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    background: "#fff",
                    color: "#333",
                    py: { xs: 1, md: 1 },
                    width: "100%",
                    maxWidth: "100vw",
                    overflow: "hidden",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: { xs: 2, sm: 3, md: 4 },
                        maxWidth: "100%",
                    }}
                >
                    {/* LEFT — LOGO */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                    >
                        <DeveloperModeIcon
                            sx={{
                                fontSize: { xs: 32, md: 40 },
                                color: "#3f7bf7",
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: "#3f7bf7",
                                letterSpacing: 1,
                                fontSize: { xs: "1.25rem", md: "1.5rem" },
                            }}
                        >
                            ArrayLogic
                        </Typography>
                    </Box>

                    {/* CENTER — NAV LINKS (Desktop Only) */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 4,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                component={Link}
                                to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                                sx={{
                                    color: "black",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    "&:hover": {
                                        color: "#3f7bf7",
                                    },
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* RIGHT — BUTTON (Desktop Only) */}
                    <Button
                        variant="outlined"
                        sx={{
                            display: { xs: "none", md: "block" },
                            borderColor: "#3f7bf7",
                            color: "#3f7bf7",
                            borderRadius: "30px",
                            px: 3,
                            py: 1,
                            fontWeight: 600,
                            textTransform: "none",
                            "&:hover": {
                                borderColor: "#3f7bf7",
                                backgroundColor: "#3f7bf7",
                                color: "#fff",
                            },
                        }}
                        onClick={() => navigate("/getquote")}
                    >
                        REQUEST QUOTE
                    </Button>

                    {/* MOBILE MENU ICON */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon sx={{ fontSize: 28, color: "#3f7bf7" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* MOBILE DRAWER */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: "75%",
                        maxWidth: "300px",
                        boxSizing: "border-box",
                    },
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        backgroundColor: "#fff",
                    }}
                >
                    {/* Drawer Header */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                            borderBottom: "1px solid #e0e0e0",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "#3f7bf7" }}
                        >
                            Menu
                        </Typography>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Navigation Links */}
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton
                                    onClick={() =>
                                        handleNavigation(
                                            `/${item.replace(/\s+/g, "").toLowerCase()}`
                                        )
                                    }
                                    sx={{
                                        py: 2,
                                        "&:hover": {
                                            backgroundColor: "#f5f5f5",
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontWeight: 500,
                                                color: "#333",
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    {/* Mobile Request Quote Button */}
                    <Box sx={{ p: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderColor: "#3f7bf7",
                                color: "#3f7bf7",
                                borderRadius: "30px",
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": {
                                    borderColor: "#3f7bf7",
                                    backgroundColor: "#3f7bf7",
                                    color: "#fff",
                                },
                            }}
                            onClick={() => handleNavigation("/getquote")}
                        >
                            REQUEST QUOTE
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;