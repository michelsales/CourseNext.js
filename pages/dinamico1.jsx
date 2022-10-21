import React from 'react';


export async function getServerSideProps() {
    return { 
    //   revalidate: 7, 
      props: {
          numero: Math.random(),
      }  
    }
}

const Estatico4 = ( props ) => {
    
    return (
        <div>
            <h1>dinamico #1</h1>
            <h4>{props.numero}</h4>
        </div>
    );
};


export default Estatico4;