import React, { useState } from 'react';
import {HomeButton, HomeContainer, HomeStoreNameText, HomeWelcomeText,  } from './styles';
import { ReactComponent as HomeBackground } from '../../assets/images/homebackground.svg';
import { useNavigate } from 'react-router-dom';
export default function HomePage(){
    const navigate = useNavigate();
    return(
        <HomeContainer>
            <HomeWelcomeText>Bem vindo à</HomeWelcomeText>
            <HomeBackground />
            <HomeStoreNameText>Loja de Centavos</HomeStoreNameText>
            <HomeButton onClick={()=>{navigate("/products")}}>Ver produtos </HomeButton>
        </HomeContainer>
    );
}