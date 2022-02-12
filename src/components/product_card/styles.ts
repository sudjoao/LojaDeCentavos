
import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    background-color: white;
    border-radius: 1rem;
    border-style: solid;
    border-color: rgba(1, 1, 1, 0.1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0.5rem;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
`

export const ProductTitle = styled.h1`
    text-align: center;
    font-size: 1rem;
`

export const ProductImage = styled.img`
    width: 10rem;
`

export const ProductPriceBadge = styled.div`
    background-color: #ffb6c1;
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`

export const ProductPrice = styled.p`
    font-size: 0.8rem;
    font-weight: bolder;
    color: #803440;
`
