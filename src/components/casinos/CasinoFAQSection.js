import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function CasinoFAQSection() {
  const faqItems = [
    {
      question: "Sind Online-Spielotheken sicher?",
      answer:
        "Ja, die von uns empfohlenen Spielotheken sind lizenziert und reguliert, was bedeutet, dass sie strenge Sicherheitsstandards einhalten. Wir überprüfen jede Spielothek auf seine Sicherheitsprotokolle, um sicherzustellen, dass deine Daten und dein Geld geschützt sind.",
    },
    {
      question: "Wie kann ich eine Einzahlung machen?",
      answer:
        "Die meisten Spielotheken bieten eine Vielzahl von Zahlungsmethoden an, darunter Kreditkarten, E-Wallets und Banküberweisungen. Du kannst die bevorzugte Methode in der Kasse der Spielothek auswählen und den Anweisungen folgen.",
    },
    {
      question: "Welche Spiele bieten die besten Gewinnchancen?",
      answer:
        "Spiele wie Blackjack und Video Poker haben im Allgemeinen die besten Auszahlungsraten, gefolgt von Slots und Roulette. Es ist wichtig, die Regeln und die RTP (Return to Player) jedes Spiels zu kennen, um deine Gewinnchancen zu maximieren.",
    },
    {
      question: "Wie kann ich meine Gewinne auszahlen lassen?",
      answer:
        "Um eine Auszahlung zu machen, gehe zur Kasse der Spielothek und wähle die Option zur Auszahlung. Befolge die Anweisungen, um den Betrag und die Zahlungsmethode auszuwählen. Die Auszahlungsdauer kann je nach Methode variieren.",
    },
    {
      question: "Welche Boni sind am vorteilhaftesten?",
      answer:
        "Willkommensboni und Freispiele sind großartige Möglichkeiten, dein Spielkapital zu erhöhen. Es ist jedoch wichtig, die Bonusbedingungen zu lesen, da einige Boni schwerere Umsatzbedingungen haben als andere.",
    },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mt: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen zu Online Spielotheken
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

export default CasinoFAQSection;
