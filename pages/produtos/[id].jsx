import React from 'react';


export async function getStaticPaths(){ 
    const resp = await fetch(`http://localhost:3000/api/marcas`);
    const marcas = await resp.json();

    const paths = marcas.map(id => {
        return { params: {id: `${id}`}}
    })

    return {
        //fallback: false,
        fallback: true,
        paths: paths
    }
}
export async function getStaticProps({params}){ 
    const resp = await fetch(`http://localhost:3000/api/produtos/${params.id}`)
    const produtos = await resp.json(); 

    return {
        props: {
            produtos,
        }
    }
}

const ProdutosPorId = (props) => {
    const { produtos } = props;
    return (
        <div>
            {produtos ? 
                <> 
                    <h1>Produto pelo id {produtos.id}</h1>
                    <h1>Produto: {produtos.name}</h1>
                    <h1>Marca: {produtos.brand}</h1>
                </>
                 : 
                false
            }
        </div>
    );
};

export default ProdutosPorId;