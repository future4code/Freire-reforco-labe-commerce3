import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  border: 1px solid black;
  background-color: green;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #7378A5;
    height: 16vh;
  }
`;


const ImgIcone = styled.img`
   height: 5vh;
   margin: 10px;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
    margin: 3px;
  }
`

const Footer = () => {
  return (
        
    <FooterContainer>
      <h2>Siga-nos nas redes sociais:</h2>
      <div>
        <ImgIcone src="/img/Facebook.png"/>
        <ImgIcone src="/img/Instagram.png"/>
        <ImgIcone src="/img/Twitter.png"/>
      </div>
    </FooterContainer>
        
  )
}
export default Footer;

