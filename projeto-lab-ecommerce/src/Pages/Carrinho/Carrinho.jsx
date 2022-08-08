import React from 'react'
import Itens from '../../components/ItensCar/Itens'
import { CarrinhoContainer } from './CarrinhoStyles'


const Carrinho = (props) => {
  const itensDoCarrinho = props.carrinho && props.carrinho.map(item => {
    return <Itens
    key={item}
    qtdProd={item.qtd}
    nomeProd={item.nome}
    precoProd={item.preco}
    onClick = {() => props.removerItemDoCarrinho(item)}
    
    />   
  })

  return (
    
    <CarrinhoContainer>

      <h2>CARRINHO :</h2>
        {itensDoCarrinho}
      <p>Valor Total : R$ {props.vlrTotProd },00 </p>

    </CarrinhoContainer>

    
  );
}

export default Carrinho;