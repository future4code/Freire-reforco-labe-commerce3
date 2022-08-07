import React from 'react'
import { ItensContainer } from './ItensStyles';


function Itens(props) {
  return (
    <ItensContainer >
        <p>{props.qtdProd}x</p>
        <p>{props.nomeProd}</p>
        <p>{props.precoProd}</p>
        <button onClick={props.onClick}>Remover</button>
    </ItensContainer>
    
  );
}
export default Itens;
