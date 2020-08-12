import React from "react"
import styled from 'styled-components/macro'

export const LanSumma = ({ husLan, setHusLan }) => {
    return (
        <Label className="hus-lan">

            <Input placeholder="SEK"
                type="number"
                required
                value={husLan}
                id={husLan}
                onChange={e => setHusLan(e.target.value)}
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