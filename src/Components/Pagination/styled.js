import styled from 'styled-components';

export const Button = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 3px;
  border-width: 1px;
  margin-right: 10px;
  border-color: #e23636;
  :hover {
    background-color: #e23636;
  }
`;
export const Nav = styled.nav`
  ul {
    display: flex;
    padding: 0;
    padding-left: 2%;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: white;
    }
  }
`;