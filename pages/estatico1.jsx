import React, { useState, useEffect} from 'react';

const Estatico1 = props => {

    const [number , setNumber] = useState(0)

    useEffect(() => { 
        setNumber(Math.random());
    }, [])

    return (
        <div>
            <h1>Estático #1</h1>
            <h1>Estático aleatório: {number}</h1>
        </div>
    );
};

export default Estatico1;