import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import WettTippTemplate from "./WettTippTemplate";
import wettTippsData from "../../../services/wett-tipps.json";

const WettTipp = () => {
  const { id } = useParams();

  // Finde den entsprechenden Wett-Tipp anhand der ID
  const wettTipp = wettTippsData.find((tipp) => tipp.id === id);

  if (!wettTipp) return <div>Wett-Tipp nicht gefunden!</div>;

  return (
    <MainLayout>
      <WettTippTemplate
        title={wettTipp.title}
        description={wettTipp.description}
        sport={wettTipp.sport}
        content={wettTipp.content}
        date={wettTipp.date}
        time={wettTipp.time}
        published={wettTipp.published}
        ctaText={wettTipp.ctaText}
        ctaLink={wettTipp.ctaLink}
      />
    </MainLayout>
  );
};

export default WettTipp;