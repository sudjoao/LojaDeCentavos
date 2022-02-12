
import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    background-color: white;
    border-radius: 16px;
    border-style: solid;
    border-color: rgba(1, 1, 1, 0.1);
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 8px;
    align-items: center;
    justify-content: center;
    width: 15rem;
`

export const ProductTitle = styled.h1`
    text-align: center;
    font-size: 16px;
`

export const ProductImage = styled.img`
    width: 10rem;
`

export const ProductPrice = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: red;
`
