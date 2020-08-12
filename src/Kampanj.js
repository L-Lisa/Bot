import React from "react"


export const Kampanj = ({ kampanjval, setKampanjval }) => {
    return (
        <div>


            <label className="radio-val">
                <h1>Ja</h1>
                <input required
                    className="radio-input"
                    type="radio"
                    value="Ja"
                    id="Ja"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Ja"} />
            </label>
            <label className="radio-val">
                <h1>Nej</h1>
                <input required
                    className="radio-input"
                    type="radio"
                    value="Nej"
                    id="Nej"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Nej"} />
            </label>

        </div>
    )
}