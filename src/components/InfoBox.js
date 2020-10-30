import React from 'react'

const styles = {
    height: '100px',
    width: '10vw',
    padding: '10px',
    textAlign: 'center',
    padding: 100,
    fontSize: '15px',
    zIndex: "1",
    backgroundColor: 'white'
  };

const InfoBox = (props) => {
    return (
        <div style={styles}>
            <header>{props.focus.data.story}</header>
        </div>
    )
}

export default InfoBox
