import React from 'react'
import { CardProdutos, TextCard } from './cardStyles';


const Card = (props) => {
    return (
        <CardProdutos>
            <img src={props.produto.imagem}/>
            <TextCard>
            <p>{props.produto.nome}</p>
            <p>R$ {props.produto.preco},00</p>
            {props.quantidade}
            <button onClick={() => props.adicionarNoCarrinho(props.produto)}>Adicionar</button>
            </TextCard>
        </CardProdutos>
    )
} 

export default Card;