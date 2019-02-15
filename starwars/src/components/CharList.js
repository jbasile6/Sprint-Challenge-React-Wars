import React from 'react';

import Character from './Character';



const CharList = props => {
    const sortedList = props.starwarsChar.sort((a, b) => a.name - b.name);
    //sorts list by alphabetical order of names^^^
    return (
        <div className="character-list">
        {sortedList.map(character => (
            <Character />
        ))}
        
        </div>
    );
}





export default CharList;