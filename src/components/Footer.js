import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px'
      }}
    >
      <Typography variant="body1" gutterBottom>
        © 2024 Casino Portal. Alle Rechte vorbehalten.
      </Typography>
      <Box>
        <Link href="/" color="inherit" sx={{ margin: '0 10px' }}>Home</Link>
        <Link href="/news" color="inherit" sx={{ margin: '0 10px' }}>News</Link>
        <Link href="/online-casinos" color="inherit" sx={{ margin: '0 10px' }}>Online Casinos</Link>
        <Link href="/sportwetten" color="inherit" sx={{ margin: '0 10px' }}>Sportwetten</Link>
        <Link href="/guides" color="inherit" sx={{ margin: '0 10px' }}>Guides</Link>
        <Link href="/bonusangebote" color="inherit" sx={{ margin: '0 10px' }}>Bonusangebote</Link>
        <Link href="/promotions" color="inherit" sx={{ margin: '0 10px' }}>Promotions</Link>
      </Box>
    </Box>
  );
}

export default Footer;