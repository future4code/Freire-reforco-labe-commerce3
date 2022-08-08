import React from 'react'
import { FooterContainer, ImgIcone } from './FooterStyles';


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

