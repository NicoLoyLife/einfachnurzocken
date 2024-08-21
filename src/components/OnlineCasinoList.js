import React from "react";
import { casinos } from "../services/dummyData";
import styled from 'styled-components';

const CasinoList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CasinoItem = styled.li`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

function OnlineCasinoList() {
    return (
        <div>
            <h2>Online Casinos</h2>
            <CasinoList>
                {casinos.map((casino, index) => (
                    <CasinoItem key={index}>
                        <h3>{casino.name}</h3>
                        <p>{casino.description}</p>
                        <p>Rating: {casino.rating}</p>
                        <p>Promotions: {casino.promotions}</p>
                        <p>Willkommensbonus: {casino.welcome_bonus}</p>
                    </CasinoItem>
                ))}
            </CasinoList>
        </div>
    );
}

export default OnlineCasinoList;