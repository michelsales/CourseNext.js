import React from 'react';


export function getStaticProps() {
    return { 
      props: {
          numero: Math.random()
      }  
    }
}
const Estatico2 = (props) => {
    return (
        <div>
            <h1>Estático 2</h1>
            <h1>numero aleatório gerado de maneira estatica: </h1>
            <h1>{props.numero}</h1>
        </div>
    );
};


export default Estatico2;