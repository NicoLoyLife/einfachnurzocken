import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SportsBettingFAQSection() {
  const faqItems = [
    {
      question: "Sind Sportwetten sicher?",
      answer:
        "Ja, die von uns empfohlenen Sportwetten-Anbieter sind lizenziert und reguliert. Das bedeutet, dass sie strenge Sicherheitsstandards einhalten. Wir überprüfen jeden Anbieter auf Sicherheitsprotokolle, um sicherzustellen, dass deine Daten und dein Geld geschützt sind.",
    },
    {
      question: "Wie kann ich auf Sport wetten?",
      answer:
        "Du kannst eine Wette auf ein Sportereignis platzieren, indem du eine Wettart auswählst (z.B. Sieg, Unentschieden, Über/Unter) und dann den gewünschten Einsatz eingibst. Danach bestätigst du die Wette und wartest auf das Ergebnis des Ereignisses.",
    },
    {
      question: "Welche Sportarten bieten die besten Quoten?",
      answer:
        "Die Quoten variieren je nach Sportart und Wettmarkt. Bei beliebten Sportarten wie Fußball und Basketball gibt es in der Regel sehr wettbewerbsfähige Quoten. Es ist wichtig, die Quoten zu vergleichen, um die besten Gewinnchancen zu finden.",
    },
    {
      question: "Wie kann ich meine Gewinne auszahlen lassen?",
      answer:
        "Du kannst deine Gewinne auszahlen lassen, indem du zur Kasse des Wettanbieters gehst und die Option zur Auszahlung auswählst. Befolge die Anweisungen, um den Betrag und die Zahlungsmethode auszuwählen. Die Auszahlungsdauer hängt von der gewählten Methode ab.",
    },
    {
      question: "Welche Bonusangebote sind bei Sportwetten am besten?",
      answer:
        "Gratiswetten und Willkommensboni sind beliebte Bonusangebote. Es ist jedoch wichtig, die Bonusbedingungen zu lesen, da einige Boni bestimmte Wettanforderungen oder Einschränkungen haben können.",
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen zu Sportwetten
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

export default SportsBettingFAQSection;