import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import WettTippTemplate from "./WettTippTemplate";
import markdownFiles from "../../../services/wett-tipps";

const WettTipp = () => {
  const { id } = useParams();
  const [wettTipp, setWettTipp] = useState(null);

  useEffect(() => {
    // Finde die Markdown-Datei anhand der ID
    const file = markdownFiles[`../../../services/wett-tipps/${id}.md`];
    if (file) {
      const { data, content } = matter(file);
      setWettTipp({ ...data, content });
    }
  }, [id]);

  if (!wettTipp) return <div>Wett-Tipp nicht gefunden!</div>;

  return (
    <WettTippTemplate
      title={wettTipp.title}
      description={wettTipp.description}
      sport={wettTipp.sport}
      content={wettTipp.content}
      date={wettTipp.date}
      ctaText={wettTipp.ctaText}
      ctaLink={wettTipp.ctaLink}
    />
  );
};

export default WettTipp;