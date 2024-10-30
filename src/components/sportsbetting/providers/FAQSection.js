import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";

const FAQSection = ({ faqs }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
      Häufig gestellte Fragen (FAQ)
    </Typography>

    <Box sx={{ mt: 2 }}>
      {faqs.map((faq, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          {/* Frage */}
          <Typography variant="subtitle1">{faq.question}</Typography>

          {/* Antwort */}
          <Typography variant="body2">{faq.answer}</Typography>
          {/* Trennlinie */}
          {index < faqs.length - 1 && <Divider sx={{ mt: 3 }} />}
        </Box>
      ))}
    </Box>
  </Box>
);

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default FAQSection;
