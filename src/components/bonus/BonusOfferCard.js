import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Rating } from "@mui/material";
import PaypalIcon from '@mui/icons-material/AccountBalanceWallet';

function BonusOfferCard({ offer, placement }) {
  return (
    <Card sx={{ mb: 4, boxShadow: 3, borderRadius: '15px', overflow: 'hidden' }}>
      <CardContent sx={{ p: 2, position: 'relative' }}>

        <Box sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: '#000', color: '#fff', padding: '4px 8px', borderRadius: '5px' }}>
            <Typography variant='body2'>
                {placement}
            </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant='h5' component='h5'>
                {offer.provider}
            </Typography>
        </Box>

        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
            <PaypalIcon sx={{ color: '#0070ba' }} />
        </Box>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Typography variant='h5' component='div'>{offer.rating}/5</Typography>
                <Rating value={offer.rating} readOnly precision={0.1} />
            </Grid>

            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
                <Typography variant='h4' component='div' sx={{ fontWeight: 'bold' }} color='primary'>{offer.bonus}</Typography>
                <Typography variant='body2' sx={{ mt: 1, fontStyle: 'italic' }}>{offer.bonusType}</Typography>
            </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant='body2'>RTP: <strong>{offer.rtp}%</strong></Typography>
            <Typography variant='body2'>Auszahlung: <strong>{offer.withdrawal_time}</strong></Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
            <Typography variant='body2'><strong>Umsatzbedingungen: </strong>{offer.wageringRequirements}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant='outlined' color='primary'>Review</Button>
            <Button variant='contained' color='primary'>Jetzt spielen</Button>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default BonusOfferCard;