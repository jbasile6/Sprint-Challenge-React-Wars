import React from 'react';

import Character from './Character';



const CharList = props => {
    const sortedList = props.dataArray.sort((a, b) => b.mass - a.mass);
    //sorts list into descending order by weight^^^
    return (
        <div className="character-list">
            <h2 className="Header">Star Wars Characters</h2>
            {sortedList.map(character => (

                <Character
                    key={character.id}
                    item={character}
                />
            ))}

        </div>
    );
}





export default CharList;