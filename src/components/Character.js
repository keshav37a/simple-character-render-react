import React from 'react';
import '../assets/styles/Character.css';

const Character = (props)=>{
    let character = props.character;
    return(
        <div className="character" onClick={props.click}>{character}</div>
    )
}

export default Character;