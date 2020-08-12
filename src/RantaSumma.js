import React from "react"
import styled from 'styled-components/macro'

export const RantaSumma = ({ ranta, setRanta }) => {
    return (
        <Label className="hus-lan">
            <Input placeholder="SEK"
                type="number"
                step="0.01"
                placeholder="%"
                data-decimals="2"
                value={ranta}
                id={ranta}
                onChange={e => setRanta(e.target.value)}
                required
            />
        </Label>
    )
}


const Label = styled.label`
display:flex;
flex-direction:column;
`

const Input = styled.input`
height:1.1rem;
width:50%;
max-width: 60px;
`;