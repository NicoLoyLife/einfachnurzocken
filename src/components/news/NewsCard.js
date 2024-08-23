import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function NewsCard({ news }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Card
                sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    mb: 2,
                }}
            >
                <CardMedia
                    component="img"
                    image={news.image}
                    alt={news.title}
                />
            </Card>

            <Box sx={{ mt: 2, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography
                        variant='body2'
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            mr: 1,
                            color: 'primary.main',
                        }}
                    >
                        {news.category}
                    </Typography>
                    <Typography variant='body2' sx={{ color: '#bbb' }}>
                        • {news.publish_date}
                    </Typography>
                </Box>
                <Typography variant='h6' component='h3' sx={{ fontWeight: 'bold', color: '#fff' }}>
                    {news.title}
                </Typography>
                <Typography variant='body2' component='p' sx={{ color: '#ddd', mt: 1 }}>
                    {news.excerpt}
                </Typography>
            </Box>

        </Box>
    );
}

export default NewsCard;