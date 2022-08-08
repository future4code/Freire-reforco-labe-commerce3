import styled from 'styled-components'

export const FooterContainer = styled.div`
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


export const ImgIcone = styled.img`
   height: 5vh;
   margin: 10px;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
    margin: 3px;
  }
`
