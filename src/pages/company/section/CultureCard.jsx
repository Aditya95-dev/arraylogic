import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { Window, TouchApp, MyLocation, Person } from '@mui/icons-material';

const CultureCard = ({ icon, title, description, iconColor }) => (
    <Card
        sx={{
            height: '100%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                transform: 'translateY(-4px)'
            }
        }}
    >
        <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box
                    sx={{
                        backgroundColor: iconColor,
                        borderRadius: 2,
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    {icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            color: '#1a1a1a'
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#666',
                            lineHeight: 1.7
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default function CompanyCultureCards() {
    const cards = [
        {
            icon: <Window sx={{ fontSize: 28, color: '#e57373' }} />,
            title: 'Flexibility for Work-Life Balance',
            description: 'We understand the significance of maintaining a healthy work-life balance and we provide flexible work arrangements to keep space for your personal commitments as well.',
            iconColor: '#ffebee'
        },
        {
            icon: <TouchApp sx={{ fontSize: 28, color: '#9575cd' }} />,
            title: 'Passion & Creativity',
            description: 'Our team members bring their deep passion for their work, working on every project with energy and dedication. They are empowered to think creatively, challenge norms and explore new possibilities.',
            iconColor: '#f3e5f5'
        },
        {
            icon: <MyLocation sx={{ fontSize: 28, color: '#e57373' }} />,
            title: 'Positive and Supportive Environment',
            description: 'We maintain a positive and supportive work environment where collaboration and teamwork are encouraged. Our culture promotes open communication, respect for different perspectives and a sense of belonging.',
            iconColor: '#ffebee'
        },
        {
            icon: <Person sx={{ fontSize: 28, color: '#9575cd' }} />,
            title: 'Celebrating Success Together',
            description: 'We value and celebrate the achievements and milestones of our employees. Team-building activities, social events and recognition programs create a sense of togetherness and build a positive work culture.',
            iconColor: '#f3e5f5'
        }
    ];

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            p: 4
        }}>
            <Typography sx={{ textAlign: "center", fontWeight: 600, fontSize: { xs: "28px", md: "36px" }, color: "#111", mb: 8 }}>
                Our Work Culture
            </Typography>
            <Grid container spacing={3} sx={{ maxWidth: 1400, mx: 'auto' }}>
                {cards.map((card, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <CultureCard {...card} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}