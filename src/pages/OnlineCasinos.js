import React from "react";
import OnlineCasinoList from "../components/OnlineCasinoList";
import CasinoCard from "../components/CasinoCard";
import { casinos } from "../services/dummyData";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

function OnlineCasinos() {
    return (
        <div>
            <OnlineCasinoList />
        </div>
    );
}

export default OnlineCasinos;