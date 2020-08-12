import React from "react"
import styled from 'styled-components/macro'

export const VillaVarde = ({ villavarde, setVillaVarde }) => {
    return (
        <Label className="villavarde">

            <Input placeholder="SEK"
                type="number"
                value={villavarde}
                id={villavarde}
                onChange={e => setVillaVarde(e.target.value)}
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