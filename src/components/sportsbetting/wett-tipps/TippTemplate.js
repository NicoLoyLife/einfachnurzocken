import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import getAllWettTipps from "../../../services/wett-tipps/getAllWettTipps";

const TippTemplate = () => {
    const { id } = useParams();
    const tipps = getAllWettTipps();
    const tipp = tipps[id];

    if (!tipp) {
        return <div>Prognose nicht gefunden</div>;
    }
    
    return (
        <div>
            <h1>{tipp.title}</h1>
            <ReactMarkdown>{tipp.content}</ReactMarkdown>
        </div>
    );
    }