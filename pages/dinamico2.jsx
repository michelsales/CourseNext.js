import React from 'react';


export async function getServerSideProps() {
    const resp = await fetch('http://localhost:3000/api/alunos');
    const alunos = await resp.json();

    return { 
    //   revalidate: 7, 
      props: {
          alunos: alunos,
      }  
    }
}

const dinamico2 = ( props ) => {
    const renderAlunos = () => {
        return props.alunos.map(item => {
            return (
                <li key={item.id}>
                    <h4>{item.name}</h4>
                    <h4>{item.id}</h4>
                    <h4>{item.age}</h4>
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Dinamico #2</h1>
            <h1>Relacao de alunos</h1>
            <ul>
                {renderAlunos()}
            </ul>
        </div>
    );
};


export default dinamico2;