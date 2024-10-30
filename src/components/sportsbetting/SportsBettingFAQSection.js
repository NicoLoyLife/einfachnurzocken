import React from "react";
import { Box, Typography, Divider } from "@mui/material";

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
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ mt: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen zu Sportwetten
      </Typography>

      <Box sx={{ mt: 2 }}>
        {faqItems.map((faq, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            {/* Frage */}
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {faq.question}
            </Typography>

            {/* Antwort */}
            <Typography variant="body2" sx={{ mt: 1 }}>
              {faq.answer}
            </Typography>
            {/* Trennlinie */}
            {index < faqItems.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SportsBettingFAQSection;
