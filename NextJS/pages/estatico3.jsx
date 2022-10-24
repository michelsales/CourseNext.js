import React from 'react';


export function getStaticProps() {
    return { 
      revalidate: 7, 
      props: {
          numero: Math.random()
      }  
    }
}

const Estatico3 = (props) => {

    return (
        <div>
            <h1>Estático 3</h1>
            <h1>numero aleatório gerado de maneira estatica com tempo: </h1>
            <h1>{props.numero}</h1>
        </div>
    );
};


export default Estatico3;