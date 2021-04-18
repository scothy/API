import React from 'react'

export default function Cards(props) {
    return (
        <div>
           
            <h2>{props.character}</h2>
            <h2>{props.characterDirection}</h2>
            <img src={props.image} alt="pose du lotus"/>
            <h2>{props.quote}</h2>

        </div>
    )
}

