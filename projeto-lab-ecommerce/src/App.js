import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Card from './components/Cards/Card';
import Carrinho from './Pages/Carrinho/Carrinho'
import Footer from './components/Footer/Footer';

const DivContainer = styled.div`
/* background-color: red; */


`
const DivCard = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

`

function App() {
  const [inputMinimo, setInputMinimo] = useState(0)
  const [inputMaximo, setInputMaximo] = useState(0)
  const [inputBuscaPorNome, setInputBuscaPorNome] = useState("")
  const [selectOrdenacao, setSelectOrdenacao] = useState("Crescente")
  const [vlrTotProd, setVlrTotProd] = useState (0)
  const [carrinho, setCarrinho] = useState([])
  const [itensCarrinho, setItensCarrinho] = useState([])
  const [produtos, setProdutos] = useState(
    [
      {       
        id: 1,
        nome: "viagem a Marte",
        preco: 800.0,
        imagem: "/img/urano.jpg",                   
      },
  
      {       
        id: 2,
        nome: "viagem a Saturno",
        preco: 600.0,
        imagem: "/img/saturno.jpg",                        
      },
  
      {       
        id: 3,
        nome: "Viagem a Lua",
        preco: 700.0,
        imagem: "/img/caminhada-na-lua.jpg",             
      }
  ]
  );
  const onChangeInputMinimo = (event) => {
    setInputMinimo(event.target.value)
  }

  const onchangeinputMaximo = (event) => {
    setInputMaximo(event.target.value)
  }

  const onChangeInputBuscaPorNome = (event) => {
    setInputBuscaPorNome(event.target.value)
  }

  const onChangeSelectOrdenacao = (event) => {
    setSelectOrdenacao(event.target.value)
  };

  const filtrarProdutos = () => {
    const pacotesFiltradosMin = itensCarrinho.filter(prod => {
      if (inputMinimo >= prod.preco) {
        return (prod.preco)
      }
    })

    const pacotesFiltradosMax = pacotesFiltradosMin.filter(prod => {
      if (inputMaximo <= prod.preco) {
        return (prod.preco)
      } else {
        return (prod)
      }
    })

    const pacotesFiltrados = pacotesFiltradosMax.filter(prod => {
      return prod.nome.includes(inputBuscaPorNome)
    })
    return pacotesFiltrados
  }

  const produtosFiltrados = filtrarProdutos()
   console.log(produtosFiltrados)
   

  const adicionarNoCarrinho = (produto) => {
    console.log("adicionar")
    
    const novoProduto = [...carrinho, produto]
    setCarrinho(novoProduto)

    
  }

  const removerItensDoCarrinho = (itemParaRemover) => {
    if(itemParaRemover.qtd === 1){
      const novoCarrinho = itensCarrinho.filter((item) => {
        if(item.id !== itemParaRemover.id){
          return item;
        }else {
          return false
        }
      });
      setItensCarrinho(novoCarrinho)
    } else {
      const novoCarrinho = itensCarrinho.map ((item) => {
        if(itemParaRemover.id === item.id && item.qtd >= 1){
          return{...itemParaRemover, qtd:item.qtd -1};
        } else{
          return item;
        }
      });
      setItensCarrinho(novoCarrinho)
    } 
    }

    const produtosMapeados = produtos.map((item) => {
      return (
        <Card 
         produto={item}
         adicionarNoCarrinho={adicionarNoCarrinho}
        />
      )
    }); 
  
  return (
    
      <DivContainer>
       
      <Header/>
      <Home
       minimo={inputMinimo}
       maximo={inputMaximo}
       buscaPorNome={inputBuscaPorNome}
       ordenacao={selectOrdenacao}

       onChangeMinimo={onChangeInputMinimo}
       onChangeMaximo={onchangeinputMaximo}
       onChangeBuscaPorNome={onChangeInputBuscaPorNome}
       onChangeOrdenacao={onChangeSelectOrdenacao}
      />

      <Carrinho
       itensCarrinho={Carrinho}
       vlrTotProd={vlrTotProd}
       removerItensDoCarrinho={removerItensDoCarrinho}
     
      />

      <DivCard>
        {produtosMapeados}
      </DivCard>
      <Footer/>

      </DivContainer>
    
  );
}

export default App;