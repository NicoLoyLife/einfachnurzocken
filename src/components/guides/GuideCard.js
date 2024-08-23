import React from 'react';
import { Box, Typography, Card, CardMedia, Button } from '@mui/material';

function GuideCard({ guide }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Card
                sx={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    mb: 2,
                }}
            >
                <CardMedia
                    component='img'
                    image={guide.image}
                    alt={guide.title}
                    sx={{
                        transition: 'transform 0.5s ease',
                        objectFit: 'cover',
                    }}
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
                        Casino
                    </Typography>
                </Box>
                <Typography variant='h6' component='h3' sx={{ fontWeight: 'bold', color: '#fff' }}>
                    {guide.title}
                </Typography>
                <Typography variant='body2' component='p' sx={{ color: '#ddd', mt: 1 }}>
                    {guide.excerpt}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2 }}
                    href={guide.link}
                >
                    Weiterlesen
                </Button>
            </Box>
        </Box>
    );
}

export default GuideCard;