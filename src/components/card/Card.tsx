import React, { useEffect } from 'react'

const Card: React.FC<ICard> = ({ name, desc, price, randomColor }) => {

    useEffect(() => {
        console.log('loaded', typeof(price));
    })

    const cardStyle = {
        marginTop: '4em',
        color: randomColor()
    }

    return (
        <div>
            <h1>Hello Card {name}</h1>
            <p>Desc is {desc}</p>
            <p>Price is {price}</p>
            <p style={cardStyle}>Text Color</p>
        </div>
    )
}

export default Card

type Price = string | number;

interface ICard {
    name: string;
    desc?: string;
    price: Price;
    randomColor: () => string;
}
