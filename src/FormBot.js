import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { InvestSumma } from "./InvestSumma"
import { Kalkyl } from "./Kalkyl"
import { Kampanj } from "./Kampanj"
import { LanSumma } from "./LanSumma"
import { RantaSumma } from "./RantaSumma"
import { VillaVarde } from "./VillaVarde"
import { Header } from "./Header"
import { ricardo } from "./ricardo.png"

export const FormBot = () => {
    const [section, setSection] = useState("start")
    const [valdSumma, setValdSumma] = useState("")
    const [husLan, setHusLan] = useState("")
    const [ranta, setRanta] = useState("")
    const [villavarde, setVillaVarde] = useState("")
    const [kampanjval, setKampanjval] = useState("")
    const [korttids, setKorttids] = useState("")


    const handleSubmit = event => {
        event.preventDefault();
    };
    /*  const handleSubmit = event => {
         const API = 'https://home-grown-green.herokuapp.com/plants'
        
         fetch(API, {
             method: 'POST',
             body: JSON.stringify({s
                 husLan: 'husLan'
             })
         })
             .then(function (data) {
                 console.log('Request success: ', data);
             })
             .catch(function (error) {
                 console.log('Request failure: ', error);
             });
     }  */

    return (

        <Wrapper>
            <Form onSubmit={handleSubmit} >
                {section === "start" && (
                    <SectionDiv>

                        {/*  <img src="/Users/lisa/Desktop/ChatBotCli/chat-bot/src/ricardoRund.png" alt="Ricardo" class="ricardoheader" /> */}

                        <Header />
                        <img src={ricardo} alt="Ricardo Pineda" />
                        <p>Hejsan! Har du en villatomt?</p>
                        <button className="ja-knapp" type="submit" onClick={e => setSection("harTomt")}>Ja</button>
                        <button className="nej-knapp" type="submit" onClick={e => setSection("ingenTomt")}>Nej</button>
                    </SectionDiv>

                )}
                {section === "ingenTomt" && (
                    <SectionDiv>
                        <Header />
                        <p>Du behöver vara ägare av en tomt i Stockholm för att kunna bygga med oss</p>
                    </SectionDiv>
                )}
                {section === "harTomt" && (
                    <SectionDiv>
                        <Header />
                        <div>
                            <p>
                                Fantastiskt! Då kan du tjäna 40.000kr per år!
                            </p>

                            <p>Kan du tänka dig korttidsuthyrning för att tjäna från 10000 kr extra per år?
</p>
                            <div>
                                <button className="nej-knapp" onClick={() => {
                                    setSection("mainform");
                                    setKorttids(10000)
                                }}>Ja</button>
                                <button className="nej-knapp" onClick={() => {
                                    setSection("mainform");
                                    setKorttids(0)
                                }}>Nej</button>
                            </div>
                        </div>
                    </SectionDiv>
                )}
                {section === "mainform" && (
                    <SectionDiv>
                        <Header />
                        <fieldset>
                            <p>Hur mycket är din villa värderad till idag?</p>
                            <VillaVarde villavarde={villavarde} setVillaVarde={setVillaVarde} />
                            <p>Hur mycket uppgår ditt huslån till idag?</p>
                            <LanSumma husLan={husLan} setHusLan={setHusLan} />
                            <p>Okej! Vilken räntesats har du idag ungefär?</p>
                            <RantaSumma ranta={ranta} setRanta={setRanta} />
                            Vill du ta del av Attefallsförmedlarens kampanjränta och förbättra dina månadskostnader?
                            <Kampanj kampanjval={kampanjval} setKampanjval={setKampanjval} />
                            <Kalkyl ranta={ranta} husLan={husLan} kampanjval={kampanjval} korttids={korttids} />
                        </fieldset>
                    </SectionDiv>
                )}

            </Form>
            {/* {section === "samanfatta" && (
                <article className="sammanfatta">
                    <Total ranta={ranta} husLan={husLan} />
                </article>
            )} */}
        </Wrapper>

    )
}

const Wrapper = styled.main`
width:100%;
`;


const Form = styled.form`
background:#fff;
`;

const SectionDiv = styled.section`
width:320px;
background:lightgray;
padding: 20px;
border-radius: 4px;
margin: 0 auto;
`;