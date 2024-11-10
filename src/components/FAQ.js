import React from "react";
import {
  Box,
  Typography,
  Divider,
} from "@mui/material";

function FAQ() {
  const faqItems = [
    {
      question: "Wie finde ich das beste Online Casino?",
      answer:
        "Um das beste Online Casino zu finden, solltest du auf wichtige Kriterien wie Lizenzierung, Spielauswahl, Bonusangebote, Zahlungsmethoden und Kundenservice achten. Vergleiche verschiedene Anbieter und lese Bewertungen, um die richtige Wahl zu treffen.",
    },
    {
      question: "Welche Zahlungsmethoden sind in Online Casinos verfügbar?",
      answer:
        "In Online Casinos stehen verschiedene Zahlungsmethoden zur Verfügung, darunter Kreditkarten, E-Wallets, Banküberweisungen und Prepaid-Karten. Beliebte Optionen sind Visa, Mastercard, PayPal, Skrill, Neteller und Paysafecard.",
    },
    {
      question: "Wie funktionieren Bonusangebote in Online Casinos?",
      answer:
        "Bonusangebote in Online Casinos können verschiedene Formen annehmen, darunter Willkommensboni, Freispiele, Cashback-Angebote und Treueprogramme. Spieler können von zusätzlichem Guthaben, Freispielen und anderen Vergünstigungen profitieren.",
    },
    {
      question: "Sind Online Casinos sicher und fair?",
      answer:
        "Seriöse Online Casinos sind sicher und fair, da sie über eine gültige Glücksspiellizenz verfügen und regelmäßig von unabhängigen Behörden überprüft werden. Achte auf renommierte Lizenzgeber wie die Malta Gaming Authority oder die UK Gambling Commission.",
    },
    {
      question: "Gibt es mobile Casino-Apps für Smartphones und Tablets?",
      answer:
        "Viele Online Casinos bieten mobile Apps oder eine optimierte Webseiten-Version für Smartphones und Tablets an. Spieler können unterwegs auf ihr Lieblingsspiele zugreifen und von unterwegs spielen. Achte auf eine stabile Internetverbindung und ein sicheres Gerät.",
    },
    {
      question:
        "Wie kann ich den Kundenservice eines Online Casinos kontaktieren?",
      answer:
        "Der Kundenservice eines Online Casinos ist in der Regel per E-Mail, Live-Chat oder Telefon erreichbar. Bei Fragen, Problemen oder Anliegen kannst du dich an den Support wenden und um Hilfe bitten. Achte auf die Erreichbarkeit und Kompetenz des Kundenservice-Teams.",
    },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ mb: 4, textAlign: "center" }}
      >
        Häufig gestellte Fragen (FAQ)
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Du hast Fragen? Hier findest du Antworten auf die am häufigsten
        gestellten Fragen rund um Online Casinos, Bonusangebote,
        Zahlungsmethoden und vieles mehr.
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

export default FAQ;
