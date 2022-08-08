import styled from 'styled-components'

export const CardProdutos = styled.div`
  background-color: 1px solid red;
  height: 60vh;
  width: 18vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px #1a1557;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
    
`
export const TextCard = styled.div`


img {
  width: 100%;
  height: 30%;
}
    
`