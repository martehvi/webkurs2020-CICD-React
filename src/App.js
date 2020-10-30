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
        story: "HEISANN JEG HETER MARTE OG ER FRA PORSGRUNN",
    }},
    {
    id: 2,
    data: {
        coordinates: [11.5820, 48.1351],
        title: "Hvor har jeg vært?", 
        story: "ERASMUS",
    }},
    {id: 3,
    data: {
        coordinates: [10.408773,63.422091],
        title: "Hvor er jeg nå?", 
        story: "NTNU",
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
