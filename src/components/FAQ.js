import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
    return(
        <Box sx={{ mt: 8, mb: 8 }}>
            <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
                Häufig gestellte Fragen (FAQ)
            </Typography>

            <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
                Du hast Fragen? Hier findest du Antworten auf die am häufigsten gestellten Fragen rund um Online Casinos, Bonusangebote, Zahlungsmethoden und vieles mehr.
            </Typography>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='h6'>
                        Frage 1: Wie finde ich das beste Online Casino?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Um das beste Online Casino zu finden, solltest du auf wichtige Kriterien wie Lizenzierung, Spielauswahl, Bonusangebote, Zahlungsmethoden und Kundenservice achten. Vergleiche verschiedene Anbieter und lese Bewertungen, um die richtige Wahl zu treffen.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                >
                    <Typography variant='h6'>
                        Frage 2: Welche Zahlungsmethoden sind in Online Casinos verfügbar?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        In Online Casinos stehen verschiedene Zahlungsmethoden zur Verfügung, darunter Kreditkarten, E-Wallets, Banküberweisungen und Prepaid-Karten. Beliebte Optionen sind Visa, Mastercard, PayPal, Skrill, Neteller und Paysafecard.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                >
                    <Typography variant='h6'>
                        Frage 3: Wie funktionieren Bonusangebote in Online Casinos?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Bonusangebote in Online Casinos können verschiedene Formen annehmen, darunter Willkommensboni, Freispiele, Cashback-Angebote und Treueprogramme. Spieler können von zusätzlichem Guthaben, Freispielen und anderen Vergünstigungen profitieren.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel4a-content'
                    id='panel4a-header'
                >
                    <Typography variant='h6'>
                        Frage 4: Sind Online Casinos sicher und fair?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Seriöse Online Casinos sind sicher und fair, da sie über eine gültige Glücksspiellizenz verfügen und regelmäßig von unabhängigen Behörden überprüft werden. Achte auf renommierte Lizenzgeber wie die Malta Gaming Authority oder die UK Gambling Commission.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel5a-content'
                    id='panel5a-header'
                >
                    <Typography variant='h6'>
                        Frage 5: Gibt es mobile Casino-Apps für Smartphones und Tablets?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Viele Online Casinos bieten mobile Apps oder eine optimierte Webseiten-Version für Smartphones und Tablets an. Spieler können unterwegs auf ihr Lieblingsspiele zugreifen und von unterwegs spielen. Achte auf eine stabile Internetverbindung und ein sicheres Gerät.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel6a-content'
                    id='panel6a-header'
                >
                    <Typography variant='h6'>
                        Frage 6: Wie kann ich den Kundenservice eines Online Casinos kontaktieren?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1'>
                        Der Kundenservice eines Online Casinos ist in der Regel per E-Mail, Live-Chat oder Telefon erreichbar. Bei Fragen, Problemen oder Anliegen kannst du dich an den Support wenden und um Hilfe bitten. Achte auf die Erreichbarkeit und Kompetenz des Kundenservice-Teams.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;