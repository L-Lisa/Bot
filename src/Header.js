import React from "react"
import styled from 'styled-components/macro'
import { ricardo } from "./ricardo.png"


export const Header = () => {
    return (
        <HeaderDiv>
            <img src={ricardo} alt="Ricardo Pineda" />
            <TextHeader>
                <HeaderR>Ricardo Pineda</HeaderR><p>Attefalls Förmedlaren</p>
            </TextHeader>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.section`
width:100%;
`;
const TextHeader = styled.div`
display:flex;
align-items: baseline; 
`;

const HeaderR = styled.h1`
margin:5px;
`