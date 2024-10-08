import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Rating } from "@mui/material";

function SportsBettingCard({ sportsbook }) {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                mb: 4,
            }}
        >
            <CardMedia
                component="img"
                height="500"
                image={sportsbook.image}
                alt={sportsbook.name}
            />
            <CardContent
                sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    background: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    padding: "10px",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    maxHeight: "85px",
                    "&:hover": {
                        maxHeight: "150px",
                        background: "rgba(0, 0, 0, 0.8)",
                    },
                    "&:hover p": {
                        opacity: 1,
                    },
                }}
            >
                <Typography variant="h6" component='h3'>
                    {sportsbook.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Rating
                        name='read-only'
                        value={sportsbook.rating}
                        precision={0.1}
                        readOnly
                    />
                    <Typography variant='body2' sx={{ ml: 1 }}>
                        {sportsbook.rating.toFixed(1)}
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    component="p"
                    sx={{
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                        mt: 2,
                    }}
                >
                    {sportsbook.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SportsBettingCard;