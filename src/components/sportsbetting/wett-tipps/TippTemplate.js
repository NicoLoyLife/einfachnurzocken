import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import getAllWettTipps from "../../../services/wett-tipps/getAllWettTipps";
import matter from "gray-matter";

const TippTemplate = () => {
  const { id } = useParams();
  const tipps = getAllWettTipps();
  const tipp = tipps[id];

  if (!tipp) {
    return <div>Prognose nicht gefunden</div>;
  }

  // Parse the content using gray-matter to separate frontmatter from content
  const { data: frontmatter, content } = matter(tipp.content);

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>
        <strong>Sport:</strong> {frontmatter.sport}
      </p>
      <p>
        <strong>Veröffentlicht am:</strong> {frontmatter.published}
      </p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default TippTemplate;
