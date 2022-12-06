import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({repo}){
    return(
       <ItemContainer>
        <hr/>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} className='acessar' target="_blank">Ver Repositorio</a>
        <a href="#" className='remover'>Remover</a>
        <hr/>
       </ItemContainer>
    )
}

export default ItemRepo