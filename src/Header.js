import React from "react"
import styled from 'styled-components/macro'
import { ricardoRund } from "./images/ricardoRund.png"


export const Header = () => {
    return (
        <HeaderDiv>
            <img src={ricardoRund} alt="Ricardo Pineda" />
            <h1>Ricardo Pineda</h1><p>Attefalls Förmedlaren</p>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.section`
width:100%;
`;