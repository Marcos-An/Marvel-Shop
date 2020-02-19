import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;  
  padding: 5% 0%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 70%;
`;

export const Image = styled.img`
  max-height:600px;
  max-width: 450px;
  border-radius: 10px;
  width: 100%;
`;
export const Name = styled.h1`
  font-size: 45px;
  color: #518cca;
  margin: 0;
  padding: 0;
`;
export const ID = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Info = styled.div`
  margin-top: 30px;
`;

export const Text = styled.h3`
  font-size: 21px;
  color: #504a4a;
`;
export const Price = styled.h1`
  font-size: 40px;
  color:#e23636;
`;
export const Infos = styled.div`
`;