import React, { useState } from 'react';
import styled from 'styled-components';
// import Card from '../../components/Card/Card';

const HomeContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
 
`;
const CardProdutos = styled.div`
  
`

const InputBusca = styled.input`
/* display: flex; */
  margin: 10px;
  width: 20vw;
  height: 2.5vh;
  background-color: #eae7e7;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    margin-left: 0%;
  }
  /* ::placeholder {
    margin-right: 5px;
    padding: 5px  ;
    
  } */
`

const InputMinMax = styled.input`
  margin: 10px;
  height: 2.5vh;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: #eae7e7;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    margin: 0;
  }
`

const DivOrdenacao = styled.div` 
display: flex;
margin: 10px;
  /* border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black; */
  /* background-color: #eae7e7; */
  
  option {
    border-top: none;
    border-left: none;
    border-right: none;
    /* outline: none; */
    /* border-bottom: 1px solid black; */
  }
`;

// const Card = styled.div`
  
// `

const Home = (props) => {

  // const produtosOrdenados = card.sort((a, b) => {
  //   if (props.ordenacao === "Crescente") {
  //     return a.preco - b.preco;
  //   } else {
  //     return b.preco - a.preco;
  //   }
  // })
  
  // const produtosMapeados = produtosOrdenados.map((produto) => {
  //   return (
  //     <CardProdutos
  //     imagem={produto.imagem}
  //     nome={produto.nome}
  //     preco={produto.preco}
  //     onClick={() => console.log(produto.id)}
  //     />
  //   )
  // });

  return (
    <HomeContainer>
      <div>

          <InputBusca 
             type="text"       
             placeholder="Buscar Por Nome"
             value={props.inputBusca}
             onChange={props.onChangeBuscaPorNome}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Minimo"
              value={props.inputminimo}
              onChange={props.onChangeMinimo}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Máximo"
              value={props.inputMaximo}
              onChange={props.onChangeMaximo}
            />
          </div>

      <DivOrdenacao>    
          
          <label>Ordenação:</label>
            <select 
            onChange={props.onChangeSelectOrdenacao}
            >
              <option value={"Menor Preço"}>Menor Preço</option>
              <option value={"Maior Preço"}>Maior Preço</option>
            </select>
          
      </DivOrdenacao>     
         
    </HomeContainer>
  )
}

export default Home;