import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 12vh;
    background-color: green;
    padding: 0px 20px 0px 20px;
  
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        font-size: 10px;
    }

    img {
        height: 12vh;

        @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        height: 8vh;
        }
    }

    h1 {
        font-size: 45px;
    }
`