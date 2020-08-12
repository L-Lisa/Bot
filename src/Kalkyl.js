import React, { useState } from 'react'
import styled from 'styled-components/macro'


export const Kalkyl = ({ ranta, husLan, kampanjval, korttids }) => {
    const [rantebesparing, setRantebesparing] = useState("")
    const [passiv, setPassiv] = useState("")
    var husLanNr = parseFloat(husLan)
    var rantaNr = parseFloat(ranta)


    const RantebesparingFunc = () => {
        return (

            (((husLanNr + 800000) * 0.01) - ((husLanNr * rantaNr) / 12)).toFixed(2)
        )
    }
    const PassivInFunc = () => {
        return (
            ((korttids + 40000) / 12).toFixed(2)
        )
    }
    return (
        <div>

            <button onClick={() => setRantebesparing(RantebesparingFunc(), setPassiv(PassivInFunc()))}>Gör din kalkyl</button>
            {rantebesparing && kampanjval === "Ja" && <p>Din Räntebesparing: {rantebesparing}kr</p>}
            {husLan !== "" && ranta !== "" && passiv && <p>Möjlig månatlig passiv inkomst:{passiv}kr</p>}
        </div>
    )
}