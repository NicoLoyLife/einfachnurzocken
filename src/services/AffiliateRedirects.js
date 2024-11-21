import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AffiliateLinks from "./AffiliateLinks.js";

const AffiliateRedirects = () => {
    const { affiliate } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const targetLink = AffiliateLinks[affiliate];
        if (targetLink) {
            // Weiterleitung zur Ziel-URL
            window.location.href = targetLink;
        } else {
            // Zurück zur Startseite oder einer Fehlerseite, wenn der Link nicht existiert
            navigate("/");
        }
    }, [affiliate, navigate]);

    return (
        <div>
            Weiterleitung...
        </div>
    );
};

export default AffiliateRedirects;