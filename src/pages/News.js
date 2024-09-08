/**
 * Wichtige Infos:
 * Hier sollen Neuigkeiten, Berichte und aktuelle Aktionen erscheinen.
 * 
 * Anforderungen:
 * - Übersicht
 * - Suchfeld (kann auch allgemein ein Suchfeld geben, siehe Allgemein)
 *  - Sortierfunktion (nach Datum, Beliebtheit, Kategorie)
 * - Filterfunktion (nach Kategorie)
 * 
 * Was bedeutet Kategorie?
 * Übergeordnete Kategorien sind: Online SPielotheken / Casinos / Spielotheken / Spiele & Slots / Sportwetten
 * Unterkategorien sind: News / Angebote / Neuerscheinungen (Spiele / Reviews / Bewertungen / YouTube-Videos)
 * 
 * Die Kategorie sollte schon in der Übersicht ersichtlich sein.
 * - Verknüpfungen zu einzelnen Online Spielotheken / Sportwetten-Anbietern sollte möglich sein.
 * - Ähnliche News-Artikel und passende Guide-Artikel sollten vorgeschlagen werden.
 */


import React from "react";
import NewsList from "../components/NewsList";

function News() {
    return (
        <div>
            <NewsList />
        </div>
    );
}

export default News;