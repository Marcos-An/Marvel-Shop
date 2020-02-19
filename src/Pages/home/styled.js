import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  padding: 5% 0%;
  justify-content: center;  
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-gap: 30px;

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    width: 75vw ;
  }

  @media screen and (min-width: 601px) and (max-width: 1200px){
    grid-template-columns: repeat(2, 300px); 
    grid-gap: 50px;
  }
`;

