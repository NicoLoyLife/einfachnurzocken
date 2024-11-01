/**
 * ACHTUNG: Online Spielotheken ist wichtig, da Online Casino nicht verwendet werden sollte laut Richtlinien)
 * 
 * Was hier wichtig ist:
 * - Bereich für Online Spielotheken
 * - Bereich für Social Casinos
 * - Anbieter-Vergleich
 * - Bonus-Vergleich
 * 
 * Anwendungen:
 * - Sortierfunktion (Aktualiät, Name von A-Z, Beliebtheit)
 * - Herausheben der TOP 5 Anbieter
 * - Herausheben neuer Anbieter
 * 
 * Aufbau:
 * - Launch-Datum
 * - ENZ-Wertung, untergeordnete Bewertungen sind: Registrierung / Ein- und Auszahlungen / Bonusangebot / Spieleangebot / Design & Layout
 * - Anzahl der Spiele (wenn möglich mit Anbietern, der Slots)
 * - Lizenz (immer die Deutsche Lizenz mit Bild)
 * - Bonus Angebot: Willkommensbonus / Art des Bonus / zusätzliche Boni z.B. Freispiele (dann die Anzahl) / Umsatzbedingungen
 * - Zahlungsdienste
 * - Auszahlungsdauer
 */

import React from "react";
import MainLayout from "../components/layout/MainLayout";
import CasinoHeader from "../components/casinos/CasinoHeader";
import OnlineCasinoList from "../components/casinos/OnlineCasinoList";
// import CasinoComparisonTable from "../components/casinos/CasinoComparisonTable";
import WhyChooseOnlineCasino from "../components/casinos/WhyChooseOnlineCasino";
import CasinoBonusSection from "../components/casinos/CasinoBonusSection";
import CasinoFAQSection from "../components/casinos/CasinoFAQSection";
// import CasinoNewsSection from "../components/casinos/CasinoNewsSection";
// import CasinoGuidesSection from "../components/casinos/CasinoGuidesSection";

function OnlineSpielotheken() {
    return (
        <MainLayout>
            <CasinoHeader />
            <OnlineCasinoList />
            {/* <CasinoComparisonTable /> */}
            <WhyChooseOnlineCasino />
            <CasinoBonusSection />
            <CasinoFAQSection />
            {/* <CasinoNewsSection /> */}
            {/* <CasinoGuidesSection /> */}
        </MainLayout>
    );
}

export default OnlineSpielotheken;