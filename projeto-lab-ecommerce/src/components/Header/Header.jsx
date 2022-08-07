import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: green;
  padding: 0px 20px 0px 20px;
  
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        font-size: 10px;
    }


    img {
        height: 5vh;
    }

    h1 {
        font-size: 45px;
    }
`

const Header = () => {
    // const [contador, setContador] =useState()
    // const [valorContador, setValorContador] = useState()

    // const renderizarCarrinho = () => {
    //     setValorContador(!valorContador)
    //     if (!contador) {

    //     }
    // }

    return (
        <HeaderContainer>
            <img src=''/>
            <h1>Space Travel</h1>
            {/* <button onClick={props.renderizarCarrinho()}>  */}
            <img src='/img/carrinho.png'/>
            {/* </button> */}
        </HeaderContainer>
    )
}
export default Header;
