import React, { useState } from 'react';
import {HomeButton, HomeContainer, HomeStoreNameText, HomeWelcomeText,  } from './styles';
import { ReactComponent as HomeBackground } from '../../assets/images/homebackground.svg';
export default function HomePage(){
    return(
        <HomeContainer>
            <HomeWelcomeText>Bem vindo à</HomeWelcomeText>
            <HomeBackground />
            <HomeStoreNameText>Loja de Centavos</HomeStoreNameText>
            <HomeButton onClick={()=>{}}>Ver produtos </HomeButton>
        </HomeContainer>
    );
}