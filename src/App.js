import React, { useState } from "react";
import Header from "./components/Header";
import Exxxtra from "./components/Exxxtra";
import InfoBox from "./components/InfoBox";
import MapboxGLMap from "./components/MapboxGLMap";

const styles = {
  overflow:'hidden'
}

const mapStyle = {
  display: 'flex',
  
}

const marte = 
[
    {id: 1,
    data: {
        coordinates: [9.6555, 59.1386],
        title: "Hvor kommer jeg fra?", 
        story: "Heisann! Porsgrunn er min hjemby, og jeg er ei 22 år gammel jente, som alltid har likt realfag, logiske utfordringer og å få ting til å se bra ut - men først, få ting til å fungere",
    }},
    {
    id: 2,
    data: {
        coordinates: [11.5820, 48.1351],
        title: "Hvor har jeg vært det siste året?", 
        story: "Året 2019/2020: ERASMUS i München, Tyskland",
    }},
    {
      id: 3,
      data: {
        coordinates: [10.6793, 59.9228],
        title: "Hvor jobbet jeg sommeren 2019?",
        story: "Summer Intern: Junior Software Developer - Tripletex AS"
      }
    },
    {id: 4,
    data: {
        coordinates: [10.408773,63.422091],
        title: "Hvor er jeg nå?", 
        story: "NTNU Gløshaugen, Ingeniørvitenskap & IKT - Geomatikk. 5.klasse, Master/prosjektoppgave: 3D scanning and reconstruction of Indoor Environments",
    }},
];

function App() {
  const [coordinates, setCoordinates] = useState([9.6555, 59.1386]);
  const [focus, setFocus] = useState(marte[0]);
  return (
    <div style={styles}>
      <Header/>
      <MapboxGLMap
          coordinates={coordinates} />
      <div style={mapStyle}>
        <Exxxtra 
          setCoordinates={setCoordinates}
          setFocus={setFocus}
          data={marte}/>
        <InfoBox
          focus={focus}
        />
        
      </div>
      
    </div>
  );
}

export default App;
