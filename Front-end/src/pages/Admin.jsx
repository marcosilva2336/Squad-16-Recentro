import React from "react";
import Sidebar from "../components/sidebar-adm/Sidebar";
import Cards from "../components/card-adm/Cards";
import { StyledContainer } from "../components/card-adm/StyledCard"
// import { Body } from "../components/card-adm/StyledCard"
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    margin: 3px;
    flex: 1 1 100vw;
`
function Admin(){
    return(
        <Body>
            <Sidebar />
            <StyledContainer>
                <Cards bairro='1' />
                <Cards bairro='2' />
                <Cards bairro='3' />
            </StyledContainer>
        
        
        </Body>
    )
}

export default Admin;