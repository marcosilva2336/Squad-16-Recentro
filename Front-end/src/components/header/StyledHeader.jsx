import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: white;
  padding: 10px;

`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  

  img {
    height: 60px;
  }
  #img01{
    height: 50px;
  }

  button {
    
    padding: 15px;
    border-radius: 10px;
    border: 0;
    background-color: #FF6900;
    color: white;
    margin-right: 20px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
