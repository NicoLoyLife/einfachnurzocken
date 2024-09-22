import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = ({ faqs }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" component="h2" gutterBottom>
      Häufig gestellte Fragen (FAQ)
    </Typography>
    {faqs.map((faq, index) => (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`faq-content-${index}`}
          id={`faq-header-${index}`}
        >
          <Typography variant="h5" component="h5">
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default FAQSection;