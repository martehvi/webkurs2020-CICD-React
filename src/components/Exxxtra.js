import React, { useState } from 'react'

const menuStyle = {
    position: "absolute",
    background: "white",
    padding: 10,
    zIndex: "2",
    display: "flex",
};


const Exxxtra = (props) => {
    const [buttonClicked, setButtonClicked] = useState(null);

    function onClick(story) {
        setButtonClicked(story.id)
        props.setCoordinates(story.data.coordinates);
        props.setFocus(story);
        console.log(story.data)
    };
    return (
        <div>
            <div style={menuStyle}>
                {props.data.map((story) => (
                    <div key={story.id}>
                        <button onClick={() => onClick(story)}>
                            {story.data.title}                            
                        </button>
                    </div>
                ))}
                
                
            </div>
        </div>
        )
    
}

export default Exxxtra
