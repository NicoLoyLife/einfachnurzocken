import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CasinoFAQSection() {
  const faqItems = [
    {
      question: "Sind Online-Casinos sicher?",
      answer:
        "Ja, die von uns empfohlenen Casinos sind lizenziert und reguliert, was bedeutet, dass sie strenge Sicherheitsstandards einhalten. Wir überprüfen jedes Casino auf seine Sicherheitsprotokolle, um sicherzustellen, dass deine Daten und dein Geld geschützt sind.",
    },
    {
      question: "Wie kann ich eine Einzahlung machen?",
      answer:
        "Die meisten Casinos bieten eine Vielzahl von Zahlungsmethoden an, darunter Kreditkarten, E-Wallets und Banküberweisungen. Du kannst die bevorzugte Methode in der Kasse des Casinos auswählen und den Anweisungen folgen.",
    },
    {
      question: "Welche Spiele bieten die besten Gewinnchancen?",
      answer:
        "Spiele wie Blackjack und Video Poker haben im Allgemeinen die besten Auszahlungsraten, gefolgt von Slots und Roulette. Es ist wichtig, die Regeln und die RTP (Return to Player) jedes Spiels zu kennen, um deine Gewinnchancen zu maximieren.",
    },
    {
      question: "Wie kann ich meine Gewinne auszahlen lassen?",
      answer:
        "Um eine Auszahlung zu machen, gehe zur Kasse des Casinos und wähle die Option zur Auszahlung. Befolge die Anweisungen, um den Betrag und die Zahlungsmethode auszuwählen. Die Auszahlungsdauer kann je nach Methode variieren.",
    },
    {
      question: "Welche Boni sind am vorteilhaftesten?",
      answer:
        "Willkommensboni und Freispiele sind großartige Möglichkeiten, dein Spielkapital zu erhöhen. Es ist jedoch wichtig, die Bonusbedingungen zu lesen, da einige Boni schwerere Umsatzbedingungen haben als andere.",
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen zu Online Casinos
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

export default CasinoFAQSection;
