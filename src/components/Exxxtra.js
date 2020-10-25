import React, { useState } from 'react'

const menuStyle = {
    position: "absolute",
    background: "white",
    padding: 10,
    zIndex: "1",
    display: "flex",
};

  const backgroundLayers = [
    { id: "streets-v11", name: "Streets" },
    { id: "light-v10", name: "Light" },
    { id: "dark-v10", name: "Dark" },
    { id: "satellite-v9", name: "Satellite" },
];

const marte = [
    { title: "Hvor kommer jeg fra?", coordinates: [9.6555, 59.1386] },
    { title: "Hvor har jeg vært?", coordinates: [11.5820, 48.1351]},
    { title: "Hvor er jeg nå?", coordinates: [10.408773,63.422091]},
    //{ title: "Hvor vil jeg?", coordinates: [9.6555, 59.1386]},
];

const Exxxtra = (props) => {
    return (
            <div style={menuStyle}>
                {/*backgroundLayers.map((backgroundLayer) => (
                    <div key={backgroundLayer.id}>
                        <input
                            id={backgroundLayer.id}
                            type="radio"
                            name="rtoggle"
                            value={backgroundLayer.id}
                            onClick={() => props.setbackgroundLayerID(backgroundLayer.id)}
                            defaultChecked={backgroundLayer.id === props.backgroundLayerID}
                        />
                        <label>{backgroundLayer.name}</label>
                    </div>
                ))*/}
                {marte.map((id) => (
                    <div>
                        <button onClick={() => props.setCoordinates(id.coordinates)}>
                            {id.title}                            
                        </button>
                    </div>
                ))}
                
            </div>
        )
    
}

export default Exxxtra
