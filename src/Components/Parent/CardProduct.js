import React from 'react'

export default function CardProduct(props) {
    return (
        <div>
            <p> productid : {props.id}</p>
            <p> name : {props.name}</p>
            <p> price : {props.price}</p>
            <p> likes : {props.likes}</p>
            <button onClick={()=> props.onLikes(props.id)}>Like</button>
            <button onClick={()=> props.onDislikes(props.id)}>Dislike</button>
        </div>
    )
}
