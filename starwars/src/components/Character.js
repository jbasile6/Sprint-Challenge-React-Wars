import React from 'react';

const Character = props => {
    return (
        <div className={`character-box ${props.item.name}`} >
            <h3>{props.item.name}</h3>
            
                <p>Born in {props.item.birth_year}</p>
                <p>Height: {props.item.height}</p>
                <p>Mass: {props.item.mass}</p>
                <p>Eye Color: {props.item.eye_color}</p>
                <p>Hair Color: {props.item.hair_color}</p>
                  
        </div >
    )

    }



export default Character;