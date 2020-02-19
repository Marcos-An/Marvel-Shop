import styled from 'styled-components'

export const Body = styled.div`
 
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  padding: 0 22%;
  justify-content: space-between;
  align-items: center;
  background-color: #e23636;
  color: white;
  .cart{
    color: white;
    font-size: 20px;
    :hover{
      cursor: pointer;
      color: #000;
    }
  }
  @media screen and (max-width: 600px){
    padding: 0 10%;
  }

  @media screen and (min-width: 601px) and (max-width: 1200px){
    padding: 0 15%;
}
  `;


export const Hqs = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-row-gap: 20px;
  color: #000;
`;

export const Infos = styled.div`
  display: flex;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 20px 0px 0px;
  .trash{
    color: #000;
    font-size: 18px;
    margin-top: 10px;
    :hover{
      cursor: pointer;
      color: #f78f3f;
    }
  }
`;

export const Price = styled.h2`
  padding: 0;
  margin: 0;
  color: #e23636;
`;
export const Total = styled.h2`
  padding: 0;
  margin: 0;
  margin-top: 25px;
  color: #e23636;
`;

export const Name = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 19px;
  margin-left: 10px;
`;

export const Image = styled.img`
  height: 130px;
  max-width: 80px;
  align-self: center;
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px;
  color: #504a4a;
  
  h2{
    letter-spacing: 2px;
    padding: 0;
    margin: 0;
  }
`;

export const Divider = styled.div`
  height: 1px;
  margin: 20px 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Drawer = styled.div`
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding: 60px 10px;
  animation-name: slide;
  animation-duration: 0.5s;

  @keyframes slide {
  from {width: 0%}
  to {width: 30%}
}
  .closebtn {
  position: absolute;
  top: 20px;
  color: black;
  text-decoration: none;
  font-size: 50px;
}
@media screen and (max-width: 600px){
  width: 95%;
  animation-name: slide;
  animation-duration: 0.5s;

  @keyframes slide {
  from {width: 0%}
  to {width: 95%}
}
  }

  @media screen and (min-width: 601px) and (max-width: 1200px){
    width: 90%;
    animation-name: slide;
  animation-duration: 0.5s;

  @keyframes slide {
  from {width: 0%}
  to {width: 90%}
  }
}
`;

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  animation-name: shadow;
  animation-duration: 0.6s;

  @keyframes shadow {
  from {background-color: rgba(0, 0, 0, 0.0);}
  to {background-color: rgba(0, 0, 0, 0.5);}
}
`;

export const Content = styled.div`
`;