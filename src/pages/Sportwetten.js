/**
 * Was ist hier wichtig:
 * - Anbieter-Vergleich
 * - Bonus-Vergleich
 * 
 * Anwendungen:
 * - Sortierfunktion (Aktualiät, Name von A-Z, Beliebtheit)
 * - Herausheben der TOP 5 Anbieter
 * - Herausheben neuer Anbieter
 */

import React from "react";
import SportwettenList from "../components/SportwettenList";

function Sportwetten() {
    return (
        <div>
            <SportwettenList />
        </div>
    );
}

export default Sportwetten;