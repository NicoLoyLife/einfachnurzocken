import React from "react";
import styled from 'styled-components';
import { sportwetten } from "../services/dummyData";

const WettenList = styled.ul`
    list-style: none;
    padding: 0;
`;

const WettenItem = styled.li`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

function SportwettenList() {
    return (
        <div>
            <h2>Sportwetten Anbieter</h2>
            <WettenList>
                {sportwetten.map((wetten, index) => (
                    <WettenItem key={index}>
                        <h3>{wetten.name}</h3>
                        <p>{wetten.description}</p>
                        <p>Rating: {wetten.rating}</p>
                        <p>Promotions: {wetten.promotions}</p>
                        <p>Willkommensbonus: {wetten.welcome_bonus}</p>
                    </WettenItem>
                ))}
            </WettenList>
        </div>
    );
}

export default SportwettenList;