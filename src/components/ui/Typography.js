import React from 'react';
import { Typography as MuiTypography } from '@mui/material';

function Typography({ variant, children, ...props }) {
  return (
    <MuiTypography
      variant={variant}
      {...props}
      sx={{
        color: 'text.primary',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {children}
    </MuiTypography>
  );
}

export default Typography;