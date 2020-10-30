import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Exxxtra from "./Exxxtra"

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};


const MapboxGLMap = (props) => {
  const [map, setMap] = useState(null);
  const [backgroundLayerID, setbackgroundLayerID] = useState("streets-v11");
  const mapContainer = useRef(null);
  //const [coordinates, setCoordinates] = useState([9.6555, 59.1386]);
  const [selectedIndex, setIndex] = useState(null);


  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/" + backgroundLayerID, // stylesheet location
        center: props.coordinates,
        zoom: 10
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    if (map) {
      map.setStyle("mapbox://styles/mapbox/" + backgroundLayerID);
      // added: when button is clicked in Exxxtra, this will update the coordinates
      map.setCenter(props.coordinates);
    }

  }, [backgroundLayerID, map, props]);

  return (
    <div>
      <div ref={el => (mapContainer.current = el)} style={styles} />;
    </div>
  )
    
};

export default MapboxGLMap;