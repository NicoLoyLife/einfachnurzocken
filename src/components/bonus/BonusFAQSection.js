import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BonusFAQSection() {
  const faqItems = [
    {
      question: "Was sind Bonusangebote in Online-Casinos?",
      answer:
        "Bonusangebote sind Werbeaktionen, die von Online-Casinos angeboten werden, um neue Spieler anzulocken oder bestehende Spieler zu belohnen. Diese Boni können in Form von Willkommensboni, Einzahlungsboni, Freispielen oder Cashback angeboten werden.",
    },
    {
      question: "Wie funktionieren Willkommensboni?",
      answer:
        "Willkommensboni sind spezielle Angebote, die neuen Spielern bei ihrer ersten Einzahlung gewährt werden. Der Bonus kann in Form von zusätzlichem Guthaben oder Freispielen angeboten werden. Es ist wichtig, die Umsatzbedingungen des Bonus zu lesen, um sicherzustellen, dass du die Anforderungen erfüllst, bevor du eine Auszahlung beantragen kannst.",
    },
    {
      question: "Welche Bedingungen gelten für Bonusangebote?",
      answer:
        "Bonusangebote unterliegen in der Regel bestimmten Bedingungen, wie zum Beispiel Umsatzbedingungen, Mindesteinzahlungen und zeitlichen Beschränkungen. Es ist wichtig, diese Bedingungen zu lesen und zu verstehen, bevor du einen Bonus in Anspruch nimmst, um sicherzustellen, dass du die Anforderungen erfüllen kannst.",
    },
    {
      question: "Was sind Freispiele und wie funktionieren sie?",
      answer:
        "Freispiele sind eine Art von Bonus, der es Spielern ermöglicht, Slots kostenlos zu spielen. Die Gewinne aus Freispielen können ebenfalls an Umsatzbedingungen geknüpft sein, bevor sie ausgezahlt werden können. Die Anzahl der Freispiele und die anwendbaren Spiele variieren je nach Angebot.",
    },
    {
      question: "Wie wähle ich das beste Bonusangebot aus?",
      answer:
        "Bei der Auswahl des besten Bonusangebots solltest du die Höhe des Bonus, die Art des Bonus, die Umsatzbedingungen und die Gültigkeitsdauer berücksichtigen. Ein gutes Bonusangebot bietet faire Bedingungen und eine attraktive Belohnung, die deinen Spielstil und deine Vorlieben ergänzt.",
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen zu Bonusangeboten
      </Typography>

      <Box>
        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default BonusFAQSection;