import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Exxxtra from "./Exxxtra"

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const [backgroundLayerID, setbackgroundLayerID] = useState("streets-v11");
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/" + backgroundLayerID, // stylesheet location
        center: [10.408773,63.422091],
        zoom: 10
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    if (map) map.setStyle("mapbox://styles/mapbox/" + backgroundLayerID);
  }, [backgroundLayerID, map]);

  return (
    <div>
      <Exxxtra setbackgroundLayerID={setbackgroundLayerID} backgroundLayerID={backgroundLayerID}/>
      <div ref={el => (mapContainer.current = el)} style={styles} />;
    </div>
  )
    
};

export default MapboxGLMap;