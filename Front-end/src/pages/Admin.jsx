import React from "react";
import Sidebar from "../components/sidebar-adm/Sidebar";
import Cards from "../components/card-adm/Cards";
import Tabela from "../components/tabela-adm/tabela";
import { StyledContainer } from "../components/card-adm/StyledCard"
// import { Body } from "../components/card-adm/StyledCard"
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex: 1 1 100vw;
`
const Content = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`;
function Admin() {
    return (
        <Body>
            <Sidebar />
            <Content>
                <StyledContainer>
                    <Cards bairro='1' />
                    <Cards bairro='2' />
                    <Cards bairro='3' />
                </StyledContainer>
                <Tabela />
            </Content>
        </Body>
    )
}


export default Admin;