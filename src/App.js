import React from "react";
import Header from "./components/Header";
import Exxxtra from "./components/Exxxtra";
import MapboxGLMap from "./components/MapboxGLMap";

const styles = {
  overflow:'hidden'
}

function App() {
  return (
    <div style={styles}>
      <Header/>
      <Exxxtra/>
      <MapboxGLMap />
    </div>
  );
}

export default App;
