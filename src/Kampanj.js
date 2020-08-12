import React from "react"
import styled from 'styled-components/macro'

export const Kampanj = ({ kampanjval, setKampanjval }) => {
    return (
        <div>


            <LabelR className="radio-val">

                <Input required
                    className="radio-input"
                    type="radio"
                    value="Ja"
                    id="Ja"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Ja"} />
                <RadioLabel>Ja</RadioLabel>
            </LabelR>
            <LabelR className="radio-val">

                <Input required
                    className="radio-input"
                    type="radio"
                    value="Nej"
                    id="Nej"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Nej"} />
                <RadioLabel>Nej</RadioLabel>
            </LabelR>

        </div>
    )
}



const LabelR = styled.label`
display:flex;
flex-direction:row;
align-items: baseline;
`;

const Input = styled.input`
height:1.1rem;
width:50%;
max-width: 60px;
`;

const RadioLabel = styled.h2`
font-weight:600;
font-size:1.2rem;
`