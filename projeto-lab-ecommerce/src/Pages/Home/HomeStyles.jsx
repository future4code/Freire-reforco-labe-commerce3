import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
 
`;
export const Card = styled.div`
  
`

export const InputBusca = styled.input`
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
  
`

export const InputMinMax = styled.input`
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

export const DivOrdenacao = styled.div` 
display: flex;
margin: 10px;
  
  
  option {
    border-top: none;
    border-left: none;
    border-right: none;
    /* outline: none; */
    /* border-bottom: 1px solid black; */
  }
`;

