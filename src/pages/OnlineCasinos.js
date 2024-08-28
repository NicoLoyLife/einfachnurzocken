import React from "react";
import { Container } from "@mui/material";
import CasinoHeader from "../components/casinos/CasinoHeader";
import OnlineCasinoList from "../components/casinos/OnlineCasinoList";
import CasinoComparisonTable from "../components/casinos/CasinoComparisonTable";
import WhyChooseOnlineCasino from "../components/casinos/WhyChooseOnlineCasino";
import CasinoBonusSection from "../components/casinos/CasinoBonusSection";
import CasinoFAQSection from "../components/casinos/CasinoFAQSection";
import CasinoNewsSection from "../components/casinos/CasinoNewsSection";
import CasinoGuidesSection from "../components/casinos/CasinoGuidesSection";

function OnlineCasinos() {
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
            <CasinoHeader />
            <OnlineCasinoList />
            <CasinoComparisonTable />
            <WhyChooseOnlineCasino />
            <CasinoBonusSection />
            <CasinoFAQSection />
            <CasinoNewsSection />
            <CasinoGuidesSection />
        </Container>
    );
}

export default OnlineCasinos;