import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: white;
  padding: 10px;

`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;

  .Logo-recentro {
    height: 60px;
  }
  .Logo-Prefeitura {
    height: 50px;
  }



  button {
    padding: 15px;
    border-radius: 10px;
    border: 0;
    background-color: #FF6900;
    color: white;
    margin-right: 20px;
    align-items:center;
    display: flex;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
