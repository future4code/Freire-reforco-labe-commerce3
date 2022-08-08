import React, { useState } from 'react'
import './AppStyles.jsx';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Card from './components/Cards/Card';
import Carrinho from './Pages/Carrinho/Carrinho'
import Footer from './components/Footer/Footer';
import { DivContainer, DivCard } from './AppStyles'



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
        key: 1,
        nome: "viagem a Urano",
        preco: 800.0,
        imagem: "/img/urano1.jpg",
        quantidade: 1                      
      },
  
      {       
        key: 2,
        nome: "viagem a Saturno",
        preco: 600.0,
        imagem: "/img/saturno.jpg", 
        quantidade: 1                          
      },
  
      {       
        key: 3,
        nome: "Viagem a Lua",
        preco: 700.0,
        imagem: "/img/caminhada-na-lua.jpg",
        quantidade: 1             
      },

      {       
        key: 3,
        nome: "Viagem a marte",
        preco: 700.0,
        imagem: "/img/Marte1.jpg",
        quantidade: 1             
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
   
     const novoProduto = carrinho.filter((item) => {
      if (item.key === produto.key) {
        return item
      } else {
        return false
      }
     });
     if (novoProduto.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...carrinho];
      setCarrinho(novoCarrinho)
     } else {
      const novoCarrinho = carrinho.map((item) => {
        if (produtos.key === item.key) {
          return {...item, quantidade: item.quantidade + 1};
        } else {
          return item;
        }
      });
      setCarrinho(novoCarrinho);
     }
    //   key: produto.key,
    //   nome: produto.nome,
    //   preco: produto.preco,
    //   imagem: produto.imagem,
      
    // };
    // const novosProdutos = [...produto, novoProduto]
    // setProdutos(novosProdutos)
    //const produtoIndex = produtos.find(item => item.key === produto.key)
  
  // = [...carrinho, produto]
  //   setCarrinho(novoProduto)
     }
   

  
  


  const removerItensDoCarrinho = (itemParaRemover) => {
    if(itemParaRemover.qtd === 1){
      const novoCarrinho = carrinho.filter((item) => {
        if(item.id !== itemParaRemover.id){
          return item;
        }else {
          return false
        }
      });
      setItensCarrinho(novoCarrinho)
    } else {
      const novoCarrinho = carrinho.map (item => {
        if(itemParaRemover.id === item.id && item.qtd >= 1){
          return{...item, qtd: item.qtd -1};
        } else{
          return item;
        }
      });
      setItensCarrinho(novoCarrinho)
    } 
    }

     //if (produtoIndex) {
      const produtosMapeados = produtos.map((item, produto) => {
            if (item.key === produto.key) {
              item.quantidade += 1;
            }
            return (
              <Card  
               produto={item}
               adicionarNoCarrinho={adicionarNoCarrinho}
              />
            )
          });
          // setProdutos()

    
  
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
       adicionarNoCarrinho={adicionarNoCarrinho}
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