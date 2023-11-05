import React from "react";
import Sidebar from "../components/sidebar-adm/Sidebar";
import Cards from "../components/card-adm/Cards";
import { StyledContainer } from "../components/card-adm/StyledCard"

function Admin(){
    return(
        <>
            <Sidebar />
            <StyledContainer>
                <Cards bairro='1' />
                <Cards bairro='2' />
                <Cards bairro='3' />
            </StyledContainer>
        
        
        </>
    )
}

export default Admin;