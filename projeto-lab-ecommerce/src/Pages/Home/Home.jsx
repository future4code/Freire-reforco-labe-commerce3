import React, { useState } from 'react';
import { Card, DivOrdenacao, HomeContainer, InputBusca, InputMinMax } from './HomeStyles';
//import {} from './HomeStyles'

const Home = (props) => {

  const produtosOrdenados =  props.card && props.card.sort((a, b) => {
    if (props.ordenacao === "Crescente") {
      return a.preco - b.preco;
    } else {
      return b.preco - a.preco;
    }
  })
  
  const produtosMapeados = produtosOrdenados && produtosOrdenados.map((produto) => {
    return (
      <Card
      key={produto.key}
      imagem={produto.imagem}
      nome={produto.nome}
      preco={produto.preco}
      onClick={() => console.log(produto.key)}
      />
    )
  });

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
         {produtosMapeados}
    </HomeContainer>
  )
}

export default Home;